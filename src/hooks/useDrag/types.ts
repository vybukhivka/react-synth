import { setActiveType } from '../../components/synth/Tracks/Track';
import { MixerChannelParams, MixerState } from '../../store/slices/mixerSlice';
import {
  LfoTypes,
  ModulationSources,
  RndTypes,
  RndTypes,
} from '../../store/slices/modulationSlice';
import { TrackParams, TrackState } from '../../store/slices/tracksSlice';
import { DragElement } from '../../types/dragTypes';

export type UseDragResults = {
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
  angle: number;
  startDrag: (e: React.MouseEvent) => void;
};

export type UseDragProps = {
  initialValue: number;
  type: DragElement;
  trackId: keyof TrackState | keyof MixerState['channels'];
  paramName:
    | keyof TrackParams
    | keyof MixerChannelParams
    | keyof LfoTypes
    | keyof RndTypes;
  setActiveParam: React.Dispatch<React.SetStateAction<setActiveType>>;
  fxName: 'reverb' | 'delay';
};

export type DragState = {
  angle: number;
  isDragging: boolean;
  initialPosition: { x: number; y: number } | null;
};

export type DragAction =
  | { type: 'START_DRAG'; payload: { x: number; y: number } }
  | { type: 'UPDATE_ANGLE'; payload: number }
  | { type: 'STOP_DRAG' };
