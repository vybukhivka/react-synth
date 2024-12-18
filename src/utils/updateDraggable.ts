import { DragElement } from '../types/dragTypes';
import clamp from './clamp';

export default function updateDraggable(
  type: DragElement,
  angle: number,
  deltaX: number,
  deltaY: number,
  onUpdate: (value: number) => void,
) {
  switch (type) {
    case 'knob': {
      const newAngle = clamp(angle + deltaX + deltaY, -45, 225);
      onUpdate(newAngle);
      break;
    }
    case 'fader': {
      const newHeight = clamp(angle + deltaY, 0, 154);
      onUpdate(newHeight);
      break;
    }
    case 'send': {
      const newWidth = clamp(angle + deltaX, 0, 48);
      onUpdate(newWidth);
      break;
    }
    case 'modMatrixCell': {
      const newHeight = clamp(angle + deltaY / 8, -25, 25);
      onUpdate(newHeight);
      break;
    }
  }
}
