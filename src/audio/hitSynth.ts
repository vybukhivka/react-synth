import * as Tone from 'tone';
import store from '../store/store';

export const createHitSynth = () => {
  const state = store.getState().tracks;

  const oscillator = new Tone.Oscillator({
    type: 'sine',
    frequency: 200,
    volume: -12,
  });

  const noise = new Tone.Noise({
    type: 'white',
    volume: -12,
  });

  const pitchEnvelope = new Tone.FrequencyEnvelope({
    attack: 0.005,
    decay: 0.01,
    sustain: 0,
    release: 0.01,
    baseFrequency: 200,
    octaves: 1,
  });

  const amplitudeEnvelope = new Tone.AmplitudeEnvelope({
    attack: 0.005,
    decay: 0.5,
    sustain: 0,
    release: 0.5,
  });

  const filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 11500,
    rolloff: -24,
  });

  const output = new Tone.Gain(0.3).toDestination();

  pitchEnvelope.connect(oscillator.frequency);
  oscillator.connect(filter);
  noise.connect(filter);
  filter.connect(amplitudeEnvelope);
  amplitudeEnvelope.connect(output);

  oscillator.start();
  noise.start();

  const trigger = (time = Tone.now()) => {
    const attack = amplitudeEnvelope.attack;
    const release = amplitudeEnvelope.release;
    const timing = time + attack + release;
    amplitudeEnvelope.triggerAttack(time);
    amplitudeEnvelope.triggerRelease(timing);
  };

  const setFrequency = (frequency: number) => {
    pitchEnvelope.baseFrequency = frequency;
    oscillator.frequency.value = frequency;
  };

  const setDecay = (time: number) => {
    amplitudeEnvelope.decay = time;
    amplitudeEnvelope.release = time;
  };

  const setPitchEnv = (time: number) => {
    pitchEnvelope.decay = time;
    pitchEnvelope.release = time;
  };

  // const setBitReduction = (bits: number) => {
  //   bitCrusher.bits.value = bits;
  // };

  const dispose = () => {
    oscillator.stop();
    noise.stop();
    oscillator.dispose();
    noise.dispose();
    amplitudeEnvelope.dispose();
    filter.dispose();
    output.dispose();
  };

  return { setPitchEnv, trigger, setDecay, dispose, setFrequency, output };
};
