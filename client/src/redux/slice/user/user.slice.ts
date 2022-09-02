import { Todo, UserState } from '../types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userState: UserState = {
  userId: '',
  todos: [],
  projects: [],
  labels: [],
};

export const userSlice = createSlice({
  name: 'user slice',
  initialState: userState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.todoId !== action.payload);
    },
  },
});
