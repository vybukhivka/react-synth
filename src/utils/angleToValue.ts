import { DragElement } from '../types/dragTypes';

export default function angleToValue(angle: number, type: DragElement) {
  if (type === 'knob') return (angle / 100) * 270 - 45;
  if (type === 'fader') return Math.round((angle / 100) * 154);
  if (type === 'send') return Math.round((angle / 100) * 48);
  return 0;
}
