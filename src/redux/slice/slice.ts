import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const todosStateSlice = createSlice({
  name: 'Todos',
  initialState: initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setModal: (state, action: PayloadAction<string>) => {
      state.modal = action.payload;
    },
    toggleSelect: (state, action: PayloadAction<boolean>) => {
      state.isSelectOpen = action.payload;
    },
  },
});
