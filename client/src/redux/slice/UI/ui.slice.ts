import { ActivePage, UIState } from '../types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const uiState: UIState = {
  modalOpenIs: '',
  isSelectOpen: false,
  isSidebarOpen: true,
  activePage: 'inbox',
};

export const uiSlice = createSlice({
  name: 'ui slice',
  initialState: uiState,
  reducers: {
    setModal: (state, action: PayloadAction<string>) => {
      state.modalOpenIs = action.payload;
    },

    toggleSelect: (state, action: PayloadAction<boolean>) => {
      state.isSelectOpen = action.payload;
    },

    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },

    setActivePage: (state, action: PayloadAction<ActivePage>) => {
      state.activePage = action.payload;
    },
  },
});
