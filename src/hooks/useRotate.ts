import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import {
  TrackParams,
  TrackState,
  updateParameter,
} from '../store/slices/tracksSlice';
import { DragElement } from '../types/dragTypes';
import angleToValue from '../utils/angleToValue';
import valueToAngle from '../utils/valueToAngle';

type UseDragResults = {
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
  angle: number;
  value: number;
  startDrag: (e: React.MouseEvent) => void;
};

type UseDragProps = {
  initialAngle: number;
  type: DragElement;
  trackId: keyof TrackState;
  paramName: keyof TrackParams;
};

function useDrag({
  initialAngle = -45,
  type = 'knob' as DragElement,
  trackId,
  paramName,
}: Partial<UseDragProps> = {}): UseDragResults {
  const dispatch = useAppDispatch();
  const [angle, setAngle] = useState(initialAngle);
  const [value, setValue] = useState(() => angleToValue(angle, 'knob'));
  const angleRef = useRef(initialAngle);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const initialPosition = useRef<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  function startDrag(e: React.MouseEvent) {
    setIsDragging(true);
    initialPosition.current = { x: e.clientX, y: e.clientY };
  }

  function stopDrag() {
    setIsDragging(false);
    setAngle(angleRef.current);

    if (type === 'knob' && trackId && paramName) {
      dispatch(
        updateParameter({
          trackId,
          paramName: paramName,
          paramValue: angleRef.current,
        }),
      );
      setValue(() => valueToAngle(angleRef.current, 'knob'));
    }
  }

  function handleMove(e: MouseEvent) {
    if (!isDragging || !initialPosition.current || !elementRef.current) return;

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
    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', stopDrag);
    } else {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', stopDrag);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', stopDrag);
    };
  }, [isDragging]);

  return {
    elementRef,
    angle,
    value,
    startDrag,
  };
}

export default useDrag;
