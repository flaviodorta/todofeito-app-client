import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const todosStateSlice = createSlice({
  name: 'Todos',
  initialState: initialState,
  reducers: {
    showModal: (state, action: PayloadAction<string | false>) => {
      state.modal = action.payload;
    },
    toggleSelect: (state, action: PayloadAction<boolean>) => {
      state.select = action.payload;
    },
  },
});
