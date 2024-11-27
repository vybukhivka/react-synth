import { DragElement } from '../types/dragTypes';

export default function valueToAngle(angle: number, type: DragElement): number {
  if (type === 'knob') {
    const degrees = (angle / 100) * 270 - 45;
    return Number(degrees.toFixed(2));
  }
  return 0;
}
