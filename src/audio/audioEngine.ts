import * as Tone from 'tone';

const isDebugMode = import.meta.env.MODE === 'development';

export const audioEngine = {
  synths: Array.from({ length: 4 }, () => new Tone.Synth().toDestination()),

  transport: Tone.getTransport(),
  clock: new Tone.Clock(time => {
    if (isDebugMode) console.log(`Clock ticked at: ${time}`);
  }, 2),

  start: () => {
    Tone.start().then(() => {
      if (isDebugMode) console.log('Audio Context Started!');
    });
  },
  startClock: () => {
    if (audioEngine.clock.state !== 'started') {
      audioEngine.clock.start();
      if (isDebugMode) console.log('Clock Started');
    }
  },
  stopClock: () => {
    if (audioEngine.clock.state === 'started') {
      audioEngine.clock.stop();
      if (isDebugMode) console.log('Clock Stoped');
    }
  },

  setBPM: (bpm: number) => {
    audioEngine.clock.frequency.value = bpm / 60;
    if (isDebugMode) console.log(`BPM set to ${bpm}`);
  },
};
