import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Blog } from '../models/blog';

interface State {
  blogs: Blog[];
  loading: boolean;
}

const initialState: State = {
  blogs: [],
  loading: true,
};

const slice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setAll: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
      state.loading = false
    },
    addOne: (state, action: PayloadAction<Blog>) => {
      state.blogs = [action.payload, ...state.blogs];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const blogActions = slice.actions;
export default slice.reducer;