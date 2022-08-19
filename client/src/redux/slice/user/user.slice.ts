import { UserState } from '../types';

import { createSlice } from '@reduxjs/toolkit';

export const userState: UserState = {
  userId: '',
  todos: [],
  projects: [],
  labels: [],
};

export const userSlice = createSlice({
  name: 'user slice',
  initialState: userState,
  reducers: {},
});
