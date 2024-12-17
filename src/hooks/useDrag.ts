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
import { updateFader } from '../store/slices/mixerSlice';
import { setActiveType } from '../components/synth/Tracks/Track';
import calcDelta from '../utils/calcDelta';
import clamp from '../utils/clamp';

type UseDragResults = {
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
  angle: number;
  startDrag: (e: MouseEvent) => void;
};

type UseDragProps = {
  initialValue: number;
  type: DragElement;
  trackId: keyof TrackState;
  paramName: keyof TrackParams;
  setActiveParam: React.Dispatch<React.SetStateAction<setActiveType>>;
};

function useDrag({
  initialValue = 0,
  type = 'knob' as DragElement,
  trackId,
  paramName,
  setActiveParam,
}: Partial<UseDragProps> = {}): UseDragResults {
  const dispatch = useAppDispatch();
  const initialPosition = useRef<{ x: number; y: number } | null>(null);
  const [angle, setAngle] = useState(valueToAngle(initialValue, type));
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // 1. Calculate delta +
  // 2. Clamp values +
  // 3. Type based updates

  function handleMove(e: MouseEvent) {
    if (!isDragging || !initialPosition.current || !elementRef.current) return;

    const { deltaX, deltaY } = calcDelta(e, initialPosition.current);

    if (type === 'knob' && setActiveParam && paramName) {
      const deltaSum = deltaX + deltaY;
      let newAngle = angle + deltaSum;
      newAngle = clamp(newAngle, -45, 225);
      setAngle(newAngle);
    }

    if (type === 'fader') {
      let newHeight = angle + deltaY;
      newHeight = clamp(newHeight, 0, 154);
      setAngle(newHeight);
    }

    if (type === 'send') {
      let newWidth = angle + deltaX;
      newWidth = Math.max(0, Math.min(newWidth, 48));
      newWidth = clamp(newWidth, 0, 48);
      setAngle(newWidth);
    }
  }

  function startDrag(e: MouseEvent) {
    setIsDragging(true);
    initialPosition.current = { x: e.clientX, y: e.clientY };
  }

  function stopDrag(e: MouseEvent) {
    setIsDragging(false);
    if (!initialPosition.current) return;
    const { deltaX, deltaY } = calcDelta(e, initialPosition.current);

    if (type === 'knob' && trackId && paramName) {
      const deltaSum = deltaX + deltaY;
      let newAngle = angle + deltaSum;
      newAngle = Math.max(-45, Math.min(newAngle, 225));
      dispatch(
        updateParameter({
          trackId,
          paramName,
          paramValue: angleToValue(newAngle, 'knob'),
        }),
      );
    }

    if (type === 'fader' && trackId && paramName) {
      let newHeight = angle + deltaY;
      newHeight = Math.max(0, Math.min(newHeight, 154));
      dispatch(
        updateFader({
          trackId,
          paramName: 'volume',
          paramValue: angleToValue(newHeight, type),
        }),
      );
    }

    if (type === 'send' && trackId && paramName) {
      let newWidth = angle + deltaX;
      newWidth = Math.max(0, Math.min(newWidth, 48));
      dispatch(
        updateFader({
          trackId,
          paramName: String(paramName),
          paramValue: angleToValue(newWidth, type),
        }),
      );
    }

    initialPosition.current = { x: e.clientX, y: e.clientY };
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
    startDrag,
  };
}

export default useDrag;
