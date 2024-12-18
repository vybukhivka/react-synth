import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModulationState = {};

const createMatrix = () => ({
  LFO: { P1: 0.0, P2: 0.0, P3: 0.0, P4: 0.0 },
  RND: { P1: 0.0, P2: 0.0, P3: 0.0, P4: 0.0 },
  SEQ: { P1: 0.0, P2: 0.0, P3: 0.0, P4: 0.0 },
  VEL: { P1: 0.0, P2: 0.0, P3: 0.0, P4: 0.0 },
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

export const { updateModulationParameter } = mixerSlice.actions;

export default modulationSlice.reducer;
