import { DragElement } from '../types/dragTypes';

export default function angleToValue(value: number, type: DragElement) {
  if (type === 'knob') return Math.round((value / 100) * 270 - 45);
  return 0;
}
