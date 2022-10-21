/* eslint-disable react/jsx-no-constructed-context-values */
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { login as postLoginApi, getUserDetail } from '../api/auth';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async ({ email, password }) => {
    const res = await postLoginApi({ email, password });
    if (res.status === 'error') {
      throw new Error(res.message);
    }

    localStorage.setItem('token', res?.token);
    setUser(JSON.stringify({ email, password }));
    router.push('/user');
    return res;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(false);
    router.push('/');
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await getUserDetail();
        if (res.status === 'error') {
          throw new Error(res.message);
        }
        setUser(res.data?.user);
      } catch (err) {
        setUser(null);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
			  user,
			  login,
			  logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
