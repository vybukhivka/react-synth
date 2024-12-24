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

const defaultTrackState: TrackSequencerState = {
  trigs: Array(8).fill(0),
  velocity: Array(8).fill(0),
  probability: Array(8).fill(0),
  modSequence: Array(8).fill(0),
  retrig: Array(8).fill(0),
  length: 8,
  direction: 'forward',
};

const initialState: SequencerState = {
  track1: { ...defaultTrackState },
  track2: { ...defaultTrackState },
  track3: { ...defaultTrackState },
  track4: { ...defaultTrackState },
};

const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    updateTrackProperty: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        property: keyof TrackSequencerState;
        value: number[] | number | string;
      }>,
    ) => {
      const { trackId, property, value } = action.payload;
      if (!state[trackId])
        throw new Error(`Wrong trackId of "${state[trackId]}`);
      state[trackId][property] = value as never;
    },
  },
});

export const { updateTrackProperty } = sequencerSlice.actions;
export const selectSequencer = (state: RootState): SequencerState =>
  state.sequencer;

export default sequencerSlice.reducer;
