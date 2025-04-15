import axios from './common/axios';
import { Blog } from '../models/blog';
import { blogActions } from '../state/blogs-slice';
import { store } from '../state';

export const BlogService = {
  async getAll() {
    store.dispatch(blogActions.setLoading(true));
    const res = await axios.get<Blog[]>('/blogs');
    store.dispatch(blogActions.setAll(res.data));
  },

  async create(newBlog: Blog) {
    const res = await axios.post<Blog>('/blogs', {
      ...newBlog,
      id: Date.now().toString(),
    });

    store.dispatch(blogActions.addOne(res.data));
  },
};