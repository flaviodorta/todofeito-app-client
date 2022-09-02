import { ActivePage, UIState } from '../types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const uiState: UIState = {
  activePageIs: 'inbox',
  shouldShowSelectColor: false,
  shouldShowSidebar: true,
  shouldShowAddTodoItem: false,
  shouldShowAddTodoItemModal: false,
  shouldShowAddProjectModal: false,
  shouldShowEditTodoItem: false,
};

export const uiSlice = createSlice({
  name: 'ui slice',
  initialState: uiState,
  reducers: {
    setActivePageIs: (state, action: PayloadAction<ActivePage>) => {
      state.activePageIs = action.payload;
    },

    setShouldShowSelectColor: (state) => {
      state.shouldShowSelectColor = !state.shouldShowSelectColor;
    },

    setShouldShowSidebar: (state) => {
      state.shouldShowSidebar = !state.shouldShowSidebar;
    },

    setShouldShowAddTodoItem: (state) => {
      state.shouldShowAddTodoItem = !state.shouldShowAddTodoItem;
    },

    setShouldShowAddTodoItemModal: (state) => {
      state.shouldShowAddTodoItemModal = !state.shouldShowAddTodoItemModal;
    },

    setShouldShowAddProjectModal: (state) => {
      state.shouldShowAddProjectModal = !state.shouldShowAddProjectModal;
    },

    setShouldShowEditTodoItem: (state) => {
      state.shouldShowEditTodoItem = !state.shouldShowEditTodoItem;
    },
  },
});
