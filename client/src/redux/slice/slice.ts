import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const globalStateSlice = createSlice({
  name: 'Global State',
  initialState: initialState,
  reducers: {
    setModal: (state, action: PayloadAction<string>) => {
      state.modalOpenIs = action.payload;
    },

    toggleSelect: (state, action: PayloadAction<boolean>) => {
      state.isSelectOpen = action.payload;
    },
  },
});
