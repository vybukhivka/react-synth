import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type ModulationDestinations = {
  P1: number;
  P2: number;
  P3: number;
  P4: number;
};

export type ModulationSources = {
  LFO: ModulationDestinations;
  RND: ModulationDestinations;
  SEQ: ModulationDestinations;
  VEL: ModulationDestinations;
};

export type ModulationState = {
  [trackId: string]: ModulationSources;
};

const createMatrix = (): ModulationSources => ({
  LFO: { P1: 10, P2: 0, P3: 0, P4: 0 },
  RND: { P1: 0, P2: 20, P3: 0, P4: 0 },
  SEQ: { P1: 0, P2: 0, P3: 30, P4: 0 },
  VEL: { P1: 0, P2: 0, P3: 0, P4: 40 },
});

const initialState: ModulationState = {
  track1: createMatrix(),
  track2: createMatrix(),
  track3: createMatrix(),
  track4: createMatrix(),
};

const modulationSlice = createSlice({
  name: 'modulation',
  initialState,
  reducers: {
    updateModulationParameter: (
      state: ModulationState,
      action: PayloadAction<{
        track: keyof ModulationState;
        source: keyof ModulationSources;
        destination: keyof ModulationDestinations;
        value: number;
      }>,
    ) => {
      const { track, source, destination, value } = action.payload;
      state[track][source][destination] = value;
    },
  },
});

export const { updateModulationParameter } = modulationSlice.actions;
export const selectMatrix = (state: RootState): ModulationState =>
  state.modulation;

export default modulationSlice.reducer;
