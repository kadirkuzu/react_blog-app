import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/login/Page';
import Register from '../pages/auth/register/Page';
import Layout from '../pages/layout/Layout';
import BlogList from '../pages/blogs/list/Page';
import CreateBlog from '../pages/blogs/create/Page';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/blogs" />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route element={<PrivateRoute shouldLoggedIn={true} navigateTo='/login' />}>
            <Route path="/create" element={<CreateBlog />} />
          </Route>
          <Route element={<PrivateRoute shouldLoggedIn={false} navigateTo='/' />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;