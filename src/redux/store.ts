import { configureStore } from '@reduxjs/toolkit';
import { globalStateSlice } from './slice/slice';

export const store = configureStore({
  reducer: globalStateSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export const globalActions = globalStateSlice.actions;
