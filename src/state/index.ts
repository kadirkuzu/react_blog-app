import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import blogReducer from './blogs-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;