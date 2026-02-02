import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout as logoutAction } from '../features/auth/authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const logout = () => {
    dispatch(logoutAction());
    navigate('/login', { replace: true });
  };

  return {
    user,
    isAuthenticated,
    logout,
  };
}
