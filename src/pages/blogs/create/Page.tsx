import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BlogService } from '../../../services/blog-service';
import { RootState } from '../../../state';

const CreatePost = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await BlogService.create({
      title,
      content,
      authorId: user!.id,
      createdDate: new Date().toISOString(),
    },navigate);
  };

  return (
    <div className="container mt-4 text-white">
      <h2 className="mb-4">Yeni Blog Oluştur</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="input-label">Başlık</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="input-label">İçerik</label>
          <textarea
            className="form-control"
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Gönder</button>
      </form>
    </div>
  );
};

export default CreatePost;