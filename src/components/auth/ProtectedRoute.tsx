import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/redux/store';

const ProtectedRoute = () => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
