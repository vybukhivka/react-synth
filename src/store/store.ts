import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/tracksSlice';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    // modulation: modulationReducer,
    // sequencer: sequencerReducer,
    // mixer: mixerReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
