import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../state';

const PrivateRoute = ({shouldLoggedIn,navigateTo}: {shouldLoggedIn: boolean, navigateTo: string}) => {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.user === shouldLoggedIn);

  return isAuthenticated ? <Outlet /> : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;