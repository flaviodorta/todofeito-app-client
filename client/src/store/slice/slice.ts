import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const todosStateSlice = createSlice({
  name: 'Todos',
  initialState: initialState,
  reducers: {}
});
