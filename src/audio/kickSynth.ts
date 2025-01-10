import * as Tone from 'tone';
import store from '../store/store';

export const createKickSynth = () => {
  const state = store.getState().tracks;

  const oscillator = new Tone.Oscillator({
    type: 'sine',
    frequency: state.track1.param1,
    volume: -12,
  });

  const noise = new Tone.Noise({ type: 'pink', volume: -12 });

  const amplitudeEnvelope = new Tone.AmplitudeEnvelope({
    attack: 0.005,
    decay: 0.3,
    sustain: 0,
    release: 0.3,
  });

  const pitchEnvelope = new Tone.FrequencyEnvelope({
    attack: 0.005,
    decay: 0.1,
    sustain: 0,
    release: 0.1,
    baseFrequency: state.track1.param1,
    octaves: 3,
  });

  const filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 1450,
    rolloff: -24,
  });

  pitchEnvelope.connect(oscillator.frequency);
  oscillator.connect(filter);
  noise.connect(filter);
  filter.connect(amplitudeEnvelope);
  amplitudeEnvelope.toDestination();

  oscillator.start();
  noise.start();

  const trigger = (time = Tone.now()) => {
    const attack = amplitudeEnvelope.attack;
    const release = amplitudeEnvelope.release;
    const timing = time + attack + release;
    amplitudeEnvelope.triggerAttack(time);
    amplitudeEnvelope.triggerRelease(timing);
    pitchEnvelope.triggerAttackRelease(attack + release, time);
  };

  const setFrequencer = (frequency: number) => {
    pitchEnvelope.baseFrequency = frequency;
    oscillator.frequency.value = frequency;
    console.log('frequency set: ', frequency);
  };

  const dispose = () => {
    oscillator.stop();
    noise.stop();
    oscillator.dispose();
    noise.dispose();
    amplitudeEnvelope.dispose();
    pitchEnvelope.dispose();
    filter.dispose();
  };

  return { trigger, setFrequencer, dispose };
};
