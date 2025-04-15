import { Blog } from '../models/blog';
import { blogActions } from '../state/blogs-slice';
import { store } from '../state';
import { httpService } from './common/axios';

export const BlogService = {
  async getAll() {
    store.dispatch(blogActions.setLoading(true));
    const res = await httpService.get<Blog[]>('/blogs');
    store.dispatch(blogActions.setAll(res.data));
  },

  async create(newBlog: Blog) {
    const res = await httpService.post<Blog>('/blogs', {
      ...newBlog,
      id: Date.now().toString(),
    });

    store.dispatch(blogActions.addOne(res.data));
  },
};