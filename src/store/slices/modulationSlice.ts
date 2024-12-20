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
  matrix: {
    [trackId: string]: ModulationSources;
  };
  sources: {
    LFO: {
      freq: number;
    };
    RND: {
      freq: number;
    };
  };
};

const createMatrix = (): ModulationSources => ({
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
        trackId: keyof ModulationState;
        modSource: keyof ModulationSources;
        modDestination: keyof ModulationDestinations;
        modValue: number;
      }>,
    ) => {
      const { trackId, modSource, modDestination, modValue } = action.payload;
      state.matrix[trackId][modSource][modDestination] = modValue;
    },
  },
});

export const { updateModulationParameter } = modulationSlice.actions;
export const selectMatrix = (state): ModulationState['matrix'] =>
  state.modulation.matrix;

export default modulationSlice.reducer;
