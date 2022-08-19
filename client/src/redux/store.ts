import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { userSlice } from './slice/user/user.slice';
import { uiSlice } from './slice/UI/ui.slice';

import { RootState } from './slice/types';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  user: userSlice.reducer,
  ui: uiSlice.reducer,
});

// const reducers = combineReducers<RootState>({
//   user: persistReducer(persistConfig, userSlice.reducer),
//   ui: persistReducer(persistConfig, uiSlice.reducer),
// });

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export type RootState = RootState;
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useThunkDispatch = () => useDispatch<ThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const userActions = userSlice.actions;
export const uiActions = uiSlice.actions;
