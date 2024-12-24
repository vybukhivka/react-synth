import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/tracksSlice';
import mixerReducer from './slices/mixerSlice';
import modulationReducer from './slices/modulationSlice';
import sequencerReducer from './slices/sequencerSlice';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    mixer: mixerReducer,
    modulation: modulationReducer,
    sequencer: sequencerReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
