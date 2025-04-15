import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/user';

interface State {
  user: User | null;
}

const storedUser = localStorage.getItem('user');

const initialState: State = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const authActions = slice.actions;
export default slice.reducer;