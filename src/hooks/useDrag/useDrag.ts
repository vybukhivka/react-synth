import { useEffect, useReducer, useRef } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateTrackParameter } from '../../store/slices/tracksSlice';
import { DragElement } from '../../types/dragTypes';
import angleToValue from '../../utils/angleToValue';
import valueToAngle from '../../utils/valueToAngle';
import {
  MixerChannelParams,
  updateMixerParameter,
} from '../../store/slices/mixerSlice';
import calcDelta from '../../utils/calcDelta';
import updateDraggable from '../../utils/updateDraggable';
import { DragAction, DragState, UseDragProps, UseDragResults } from './types';

function dragReducer(state: DragState, action: DragAction): DragState {
  switch (action.type) {
    case 'START_DRAG':
      return {
        ...state,
        isDragging: true,
        initialPosition: { x: action.payload.x, y: action.payload.y },
      };
    case 'UPDATE_ANGLE':
      return { ...state, angle: action.payload };
    case 'STOP_DRAG':
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
}

function useDrag({
  initialValue = 0,
  type = 'knob' as DragElement,
  trackId,
  paramName,
}: Partial<UseDragProps> = {}): UseDragResults {
  const dispatch = useAppDispatch();
  const [state, localDispatch] = useReducer(dragReducer, {
    angle: valueToAngle(initialValue, type),
    isDragging: false,
    initialPosition: null,
  });
  const elementRef = useRef<HTMLDivElement | null>(null);

  function handleMove(e: MouseEvent) {
    if (!state.isDragging || !state.initialPosition || !elementRef.current)
      return;

    const { deltaX, deltaY } = calcDelta(e, state.initialPosition);

    updateDraggable(type, state.angle, deltaX, deltaY, newValue =>
      localDispatch({ type: 'UPDATE_ANGLE', payload: newValue }),
    );
  }

  function startDrag(e: MouseEvent | React.MouseEvent) {
    localDispatch({
      type: 'START_DRAG',
      payload: { x: e.clientX, y: e.clientY },
    });
  }

  function stopDrag(e: MouseEvent) {
    if (!state.initialPosition || !trackId || !paramName) return;

    const { deltaX, deltaY } = calcDelta(e, state.initialPosition);

    updateDraggable(type, state.angle, deltaX, deltaY, value => {
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
            paramName: paramName as keyof MixerChannelParams,
            paramValue: angleToValue(value, type),
          }),
        );
      }
    });

    localDispatch({ type: 'STOP_DRAG' });
  }

  useEffect(() => {
    if (state.isDragging) {
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
  }, [state.isDragging]);

  return {
    elementRef,
    angle: state.angle,
    startDrag,
  };
}

export default useDrag;
