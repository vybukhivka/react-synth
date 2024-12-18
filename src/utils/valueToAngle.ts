import { DragElement } from '../types/dragTypes';

export default function valueToAngle(angle: number, type: DragElement): number {
  if (type === 'knob') {
    const degrees = (angle / 100) * 270 - 45;
    return Number(degrees.toFixed(2));
  }
  if (type === 'fader') {
    const degrees = (angle / 100) * 154;
    return Number(degrees.toFixed(2));
  }
  if (type === 'send') {
    const degrees = (angle / 100) * 48;
    return Number(degrees.toFixed(2));
  }
  if (type === 'modMatrixCell') {
    const degrees = (angle / 2) * 50;
    return Number(degrees.toFixed(2));
  }
  return 0;
}
