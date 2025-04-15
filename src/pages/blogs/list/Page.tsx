import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state';
import { BlogService } from '../../../services/blog-service';
import { Blog } from '../../../models/blog';
import UserName from '../../../shared/components/user-name/Component';

const BlogList = () => {
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const loading = useSelector((state: RootState) => state.blogs.loading);

  useEffect(() => {
    BlogService.getAll();
  }, []);

  return (
    <div className="container mt-4 pb-4 text-white">
      <h2 className="mb-4">Tüm Bloglar</h2>

      {loading ? (
        <p>Bloglar yükleniyor...</p>
      ) : blogs.length === 0 ? (
        <p>Henüz blog eklenmemiş.</p>
      ) : (
        blogs.map((blog: Blog) => (
          <div key={blog.id} className="mb-4 p-3 border rounded bg-dark">
            <h4>{blog.title}</h4>
            <small className="text-secondary">
              {new Date(blog.createdDate).toLocaleString()} — <strong><UserName id={blog.authorId} /></strong>
            </small>
            <p className="mt-2">{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;