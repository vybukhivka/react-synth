import store from '../store/store';
import * as Tone from 'tone';

const createMixer = audioEngine => {
  const state = store.getState().mixer;
  console.log(state);

  const mixerGainTrack1 = new Tone.Gain(state.channels.track1.volume || 1);
  const mixerGainTrack2 = new Tone.Gain(state.channels.track2.volume || 1);
  const mixerGainTrack3 = new Tone.Gain(state.channels.track3.volume || 1);
  const mixerGainTrack4 = new Tone.Gain(state.channels.track4.volume || 1);

  audioEngine.kickSynth.output.connect(mixerGainTrack1);
  // audioEngine.hitSynth.output.connect(mixerGainTrack2);
  // audioEngine.hatSynth.output.connect(mixerGainTrack3);
  // audioEngine.fmSynth.output.connect(mixerGainTrack4);

  const setTrackGain = (trackId, value) => {
    if (trackId === 'track1') mixerGainTrack1.gain.value = value;
    console.log('gain', mixerGainTrack1.gain.value);
  };

  return { setTrackGain };
};

export default createMixer;
