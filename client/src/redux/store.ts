import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { globalStateSlice } from './slice/slice';
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
import { InitialState } from './slice/initialState.types';

const persistConfig = {
  key: 'root',
  storage,
};

// const reducers = combineReducers({
//   global: globalStateSlice.reducer,
// });

const persistedReducer = persistReducer(persistConfig, globalStateSlice.reducer);

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

export type RootState = InitialState;
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useThunkDispatch = () => useDispatch<ThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const globalActions = globalStateSlice.actions;
