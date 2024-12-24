import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SequencerState = {
  [trackId: string]: TrackSequencerState;
};

export type TrackSequencerState = {
  trigs: number[];
  velocity: number[];
  probability: number[];
  modSequence: number[];
  retrig: number[];
  length: number;
  direction: 'forward' | 'backward' | 'forwardBackward';
};

const initialState: SequencerState = {
  track1: {
    trigs: [0, 0, 0, 0, 0, 0, 0, 0],
    velocity: [0, 0, 0, 0, 0, 0, 0, 0],
    probability: [0, 0, 0, 0, 0, 0, 0, 0],
    modSequence: [0, 0, 0, 0, 0, 0, 0, 0],
    retrig: [0, 0, 0, 0, 0, 0, 0, 0],
    length: 8,
    direction: 'forward',
  },
  track2: {
    trigs: [0, 0, 0, 0, 0, 0, 0, 0],
    velocity: [0, 0, 0, 0, 0, 0, 0, 0],
    probability: [0, 0, 0, 0, 0, 0, 0, 0],
    modSequence: [0, 0, 0, 0, 0, 0, 0, 0],
    retrig: [0, 0, 0, 0, 0, 0, 0, 0],
    length: 8,
    direction: 'forward',
  },
  track3: {
    trigs: [0, 0, 0, 0, 0, 0, 0, 0],
    velocity: [0, 0, 0, 0, 0, 0, 0, 0],
    probability: [0, 0, 0, 0, 0, 0, 0, 0],
    modSequence: [0, 0, 0, 0, 0, 0, 0, 0],
    retrig: [0, 0, 0, 0, 0, 0, 0, 0],
    length: 8,
    direction: 'forward',
  },
  track4: {
    trigs: [0, 0, 0, 0, 0, 0, 0, 0],
    velocity: [0, 0, 0, 0, 0, 0, 0, 0],
    probability: [0, 0, 0, 0, 0, 0, 0, 0],
    modSequence: [0, 0, 0, 0, 0, 0, 0, 0],
    retrig: [0, 0, 0, 0, 0, 0, 0, 0],
    length: 8,
    direction: 'forward',
  },
};

const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    updateTrigs: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        trigs: number[];
      }>,
    ) => {
      const { trackId, trigs } = action.payload;
      state[trackId].trigs = trigs;
    },
    updateVelocity: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        velocity: number[];
      }>,
    ) => {
      const { trackId, velocity } = action.payload;
      state[trackId].velocity = velocity;
    },
    updateProb: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        probability: number[];
      }>,
    ) => {
      const { trackId, probability } = action.payload;
      state[trackId].probability = probability;
    },
    updateMod: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        modSequence: number[];
      }>,
    ) => {
      const { trackId, modSequence } = action.payload;
      state[trackId].modSequence = modSequence;
    },
    updateRetrig: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        retrig: number[];
      }>,
    ) => {
      const { trackId, retrig } = action.payload;
      state[trackId].retrig = retrig;
    },
  },
});

export const {
  updateTrigs,
  updateVelocity,
  updateProb,
  updateMod,
  updateRetrig,
} = sequencerSlice.actions;
export const selectSequencer = (state: RootState): SequencerState =>
  state.sequencer;

export default sequencerSlice.reducer;
