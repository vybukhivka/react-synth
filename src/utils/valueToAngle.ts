import { DragElement } from '../types/dragTypes';

export default function valueToAngle(value: number, type: DragElement) {
  if (type === 'knob' && value > -45 && value < 225) {
    return ((value + 45) / 270) * 100;
  }
  return 0;
}
