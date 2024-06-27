import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/Auth/authSlice';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return  isLoggedIn ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
