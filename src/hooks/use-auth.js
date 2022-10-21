import { useContext } from 'react';
import { AuthContext } from '../contexts';

export default function useAuth() {
  const { login, logout, user } = useContext(AuthContext);
  return { login, logout, user };
}
