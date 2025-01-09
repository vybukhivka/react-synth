import * as Tone from 'tone';
import store from '../store/store';

export const createKickSynth = () => {
  const state = store.getState().tracks;
  const oscillator = new Tone.Oscillator({
    type: 'sine',
    frequency: state.track1.param1,
    volume: -12,
  });

  const amplitudeEnvelope = new Tone.AmplitudeEnvelope({
    attack: 0.005,
    decay: 0.3,
    sustain: 0,
    release: 0.3,
  });

  const filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 450,
    rolloff: -24,
  });

  oscillator.connect(filter);
  filter.connect(amplitudeEnvelope);
  amplitudeEnvelope.toDestination();

  oscillator.start();

  const trigger = (time = Tone.now()) => {
    const attack = amplitudeEnvelope.attack;
    const release = amplitudeEnvelope.release;
    const timing = time + attack + release;
    amplitudeEnvelope.triggerAttack(time);
    amplitudeEnvelope.triggerRelease(timing);
  };

  const setFrequencer = (frequency: number) => {
    oscillator.frequency.value = frequency;
    console.log('frequency set: ', frequency);
  };

  const dispose = () => {
    oscillator.stop();
    oscillator.dispose();
    amplitudeEnvelope.dispose();
    filter.dispose();
  };

  return { trigger, setFrequencer, dispose };
};
