import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const todosStateSlice = createSlice({
  name: 'Todos',
  initialState: initialState,
  reducers: {
    showModal: (state, action: PayloadAction<string | null>) => {
      state.modal = action.payload;
    },
  },
});
