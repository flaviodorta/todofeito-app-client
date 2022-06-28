import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initial-state/initial-state';

export const todosStateSlice = createSlice({
  name: 'Todos',
  initialState: initialState,
  reducers: {},
});
