import { Outlet } from 'react-router-dom';
import Header from './header/Component';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;