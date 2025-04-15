import { Blog } from '../models/blog';
import { blogActions } from '../state/blogs-slice';
import { store } from '../state';
import { buildCacheKey, clearCacheForKey, httpService } from './common/axios';
import { NavigateFunction } from 'react-router-dom';

export const BlogService = {
  async getAll() {
    store.dispatch(blogActions.setLoading(true));
    const res = await httpService.get<Blog[]>('/blogs');
    const sorted = res.data.sort(
      (a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    );
    store.dispatch(blogActions.setAll(sorted));
  },

  async create(newBlog: Blog, navigate: NavigateFunction ) {
    const res = await httpService.post<Blog>('/blogs', {
      ...newBlog,
      id: Date.now().toString(),
    });

    if (!res?.data) return false;

    clearCacheForKey(buildCacheKey('/blogs'));

    store.dispatch(blogActions.addOne(res.data));
    navigate('/blogs');
  },
};