import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type ModulationDestinations = {
  P1: number;
  P2: number;
  P3: number;
  P4: number;
};

export type ModulationMatrixSources = {
  LFO: ModulationDestinations;
  RND: ModulationDestinations;
  SEQ: ModulationDestinations;
  VEL: ModulationDestinations;
};

export type ModulationMatrix = {
  [trackId: string]: ModulationMatrixSources;
};

export type LfoTypes = {
  freq: number;
};

export type RndTypes = {
  freq: number;
};

export type ModulationSources = {
  LFO: LfoTypes;
  RND: RndTypes;
};

export type ModulationState = {
  matrix: ModulationMatrix;
  sources: ModulationSources;
};

const createMatrix = (): ModulationMatrixSources => ({
  LFO: { P1: 0.2, P2: 0, P3: 0, P4: 0 },
  RND: { P1: 0, P2: 0.1, P3: 0, P4: 0 },
  SEQ: { P1: 0, P2: 0, P3: 0, P4: 0 },
  VEL: { P1: 0, P2: 0, P3: 0, P4: -0.5 },
});

const initialState: ModulationState = {
  matrix: {
    track1: createMatrix(),
    track2: createMatrix(),
    track3: createMatrix(),
    track4: createMatrix(),
  },
  sources: {
    LFO: {
      freq: 20,
    },
    RND: {
      freq: 10,
    },
  },
};

const modulationSlice = createSlice({
  name: 'modulation',
  initialState,
  reducers: {
    updateModulationParameter: (
      state: ModulationState,
      action: PayloadAction<{
        trackId: keyof ModulationMatrix;
        modSource: keyof ModulationMatrixSources;
        modDestination: keyof ModulationDestinations;
        modValue: number;
      }>,
    ) => {
      const { trackId, modSource, modDestination, modValue } = action.payload;
      state.matrix[trackId][modSource][modDestination] = modValue;
    },
    updateModualorsParameter: (
      state: ModulationState,
      action: PayloadAction<{
        paramName: keyof LfoTypes | keyof RndTypes;
        modulatorName: keyof ModulationSources;
        value: number;
      }>,
    ) => {
      const { paramName, modulatorName, value } = action.payload;
      state.sources[modulatorName][paramName] = value;
    },
  },
});

export const { updateModulationParameter, updateModualorsParameter } =
  modulationSlice.actions;
export const selectMatrix = (state: RootState): ModulationMatrix =>
  state.modulation.matrix;
export const selectSources = (state: RootState): ModulationSources =>
  state.modulation.sources;

export default modulationSlice.reducer;
