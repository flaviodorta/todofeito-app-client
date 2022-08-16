import { ADD_PROJECT_BUTTON_MODAL } from '../../constants/constants';
import { InitialState } from './initialState.types';

export const initialState: InitialState = {
  user: null,
  todos: [],
  projects: [],
  modalOpenIs: ADD_PROJECT_BUTTON_MODAL,
  isSelectOpen: false,
};
