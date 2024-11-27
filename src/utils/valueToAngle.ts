import { DragElement } from '../types/dragTypes';

export default function valueToAngle(angle: number, type: DragElement) {
  if (type === 'knob') return ((angle + 45) / 270) * 100;
  return 0;
}
