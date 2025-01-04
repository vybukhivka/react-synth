import { configureStore } from '@reduxjs/toolkit';
import sequencerSlice from '../../src/store/slices/sequencerSlice';

export const sequencerContainerMockStore = configureStore({
  reducer: {
    sequencer: sequencerSlice,
  },
  preloadedState: {
    sequencer: {
      track1: {
        trigs: Array(8).fill(false),
        velocity: Array(8).fill(0),
        probability: Array(8).fill(0),
        modSequence: Array(8).fill(0),
        retrig: Array(8).fill(0),
        length: 8,
        direction: 'forward',
      },
      track2: {
        trigs: Array(8).fill(false),
        velocity: Array(8).fill(0),
        probability: Array(8).fill(0),
        modSequence: Array(8).fill(0),
        retrig: Array(8).fill(0),
        length: 8,
        direction: 'forward',
      },
      track3: {
        trigs: Array(8).fill(false),
        velocity: Array(8).fill(0),
        probability: Array(8).fill(0),
        modSequence: Array(8).fill(0),
        retrig: Array(8).fill(0),
        length: 8,
        direction: 'forward',
      },
      track4: {
        trigs: Array(8).fill(false),
        velocity: Array(8).fill(0),
        probability: Array(8).fill(0),
        modSequence: Array(8).fill(0),
        retrig: Array(8).fill(0),
        length: 8,
        direction: 'forward',
      },
    },
  },
});
