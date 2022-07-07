import { configureStore } from '@reduxjs/toolkit';
import { todosStateSlice } from './slice/slice';

export const store = configureStore({
  reducer: todosStateSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export const todosActions = todosStateSlice.actions;
