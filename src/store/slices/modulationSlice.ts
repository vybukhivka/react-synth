import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  LFO: { P1: 0, P2: 0, P3: 0, P4: 0 },
  RND: { P1: 0, P2: 0, P3: 0, P4: 0 },
  SEQ: { P1: 0, P2: 0, P3: 0, P4: 0 },
  VEL: { P1: 0, P2: 0, P3: 0, P4: 0 },
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
    updateModulationParameter: (state, action: PayloadAction<{}>) => {
      const payload = action.payload;
    },
  },
});

export const { updateModulationParameter } = modulationSlice.actions;

export default modulationSlice.reducer;
