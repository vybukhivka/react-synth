import { audioEngine } from '../../audio/audioEngine';
import { TrackParams, TrackState } from '../../store/slices/tracksSlice';

const useTrackParams = (trackId: keyof TrackState) => {
  if (!trackId) throw new Error(`No such track with: ${trackId}`);

  const updateParam = (paramName: keyof TrackParams, value: number) => {
    switch (paramName) {
      case 'param1':
        audioEngine.kickSynth.setFrequencer(value * 4);
        break;

      case 'param2':
        audioEngine.kickSynth.setDecay(value * 0.06);
        break;

      case 'param3':
        audioEngine.kickSynth.setPitchEnv(value * 0.03);
        break;

      case 'param4':
        audioEngine.kickSynth.setBitReduction(value * 0.16);
        break;
      default:
        break;
    }
  };
  return updateParam;
};

export default useTrackParams;
