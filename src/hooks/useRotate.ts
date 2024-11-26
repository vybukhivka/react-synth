import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import {
  TrackParams,
  TrackState,
  updateParameter,
} from '../store/slices/tracksSlice';

type UseRotateResults = {
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
  angle: number;
  startRotate: (e: React.MouseEvent) => void;
};

type UseRotateProps = {
  initialAngle: number;
  type: 'fader' | 'knob' | 'send';
  trackId: keyof TrackState;
  param: keyof TrackParams;
};

function useRotate({
  initialAngle = -45,
  type = 'knob',
  trackId,
  param,
}: Partial<UseRotateProps> = {}): UseRotateResults {
  const dispatch = useAppDispatch();
  const [angle, setAngle] = useState(initialAngle);
  const angleRef = useRef(initialAngle);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const initialPosition = useRef<{ x: number; y: number } | null>(null);
  const [isRotating, setIsRotating] = useState(false);

  function startRotate(e: React.MouseEvent) {
    setIsRotating(true);
    initialPosition.current = { x: e.clientX, y: e.clientY };
  }

  function stopRotate() {
    setIsRotating(false);
    setAngle(angleRef.current);

    console.log(trackId, param);
    if (type === 'knob' && trackId && param) {
      dispatch(updateParameter({ trackId, param, value: angleRef.current }));
      console.log(trackId, param);
    }
  }

  function handleMove(e: MouseEvent) {
    if (!isRotating || !initialPosition.current || !elementRef.current) return;

    const deltaX = e.clientX - initialPosition.current.x;
    const deltaY = initialPosition.current.y - e.clientY;

    if (type === 'knob') {
      const deltaSum = deltaX + deltaY;
      let newAngle = angleRef.current + deltaSum;
      newAngle = Math.max(-45, Math.min(newAngle, 225));
      angleRef.current = newAngle;

      elementRef.current.style.transform = `rotate(${angleRef.current}deg)`;

      initialPosition.current = { x: e.clientX, y: e.clientY };
    }

    if (type === 'fader') {
      let newHeight = angleRef.current + deltaY;
      newHeight = Math.max(0, Math.min(newHeight, 154));
      angleRef.current = newHeight;

      elementRef.current.style.height = `${angleRef.current}px`;

      initialPosition.current = { x: e.clientX, y: e.clientY };
    }

    if (type === 'send') {
      let newWidth = angleRef.current + deltaX;
      newWidth = Math.max(0, Math.min(newWidth, 48));
      angleRef.current = newWidth;

      elementRef.current.style.width = `${angleRef.current}px`;

      initialPosition.current = { x: e.clientX, y: e.clientY };
    }
  }

  useEffect(() => {
    if (isRotating) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', stopRotate);
    } else {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', stopRotate);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', stopRotate);
    };
  }, [isRotating]);

  return {
    elementRef,
    angle,
    startRotate,
  };
}

export default useRotate;
