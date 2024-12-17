import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import {
  TrackParams,
  TrackState,
  updateTrackParameter,
} from '../store/slices/tracksSlice';
import { DragElement } from '../types/dragTypes';
import angleToValue from '../utils/angleToValue';
import valueToAngle from '../utils/valueToAngle';
import {
  MixerChannelParams,
  MixerState,
  updateMixerParameter,
} from '../store/slices/mixerSlice';
import { setActiveType } from '../components/synth/Tracks/Track';
import calcDelta from '../utils/calcDelta';
import clamp from '../utils/clamp';
import updateDraggable from '../utils/updateDraggable';

type UseDragResults = {
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
  angle: number;
  startDrag: (e: React.MouseEvent) => void;
};

type UseDragProps = {
  initialValue: number;
  type: DragElement;
  trackId: keyof TrackState | keyof MixerState;
  paramName: keyof TrackParams | keyof MixerChannelParams;
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

  function handleMove(e: MouseEvent) {
    if (!isDragging || !initialPosition.current || !elementRef.current) return;

    const { deltaX, deltaY } = calcDelta(e, initialPosition.current);

    updateDraggable(type, angle, deltaX, deltaY, newValue =>
      setAngle(newValue),
    );
  }

  function startDrag(e: MouseEvent) {
    setIsDragging(true);
    initialPosition.current = { x: e.clientX, y: e.clientY };
  }

  function stopDrag(e: MouseEvent) {
    setIsDragging(false);
    if (!initialPosition.current) return;
    const { deltaX, deltaY } = calcDelta(e, initialPosition.current);

    updateDraggable(type, angle, deltaX, deltaY, value => {
      if (type === 'knob') {
        dispatch(
          updateTrackParameter({
            trackId,
            paramName,
            paramValue: angleToValue(value, type),
          }),
        );
      } else {
        dispatch(
          updateMixerParameter({
            trackId,
            paramName,
            paramValue: angleToValue(value, type),
          }),
        );
      }
    });

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
