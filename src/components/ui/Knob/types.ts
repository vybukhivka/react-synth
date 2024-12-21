import {
  MixerDelayParams,
  MixerReverbParams,
} from '../../../store/slices/mixerSlice';
import { TrackParams, TrackState } from '../../../store/slices/tracksSlice';
import { setActiveType } from '../../synth/Tracks/Track';

export type KnobProps = {
  trackId: keyof TrackState;
  paramName:
    | keyof TrackParams
    | keyof MixerDelayParams
    | keyof MixerReverbParams;
  paramValue: number;
  onActiveParam: (param: setActiveType) => void;
  size: number;
  fxName: 'reverb' | 'delay';
};
