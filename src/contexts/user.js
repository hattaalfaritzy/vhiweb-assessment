import React, { useCallback, createContext, useState } from 'react';
import { getUser, getIdUser } from '../api/user';

export const UserContext = createContext({});

export default function UserProvider(props) {
  const [user, setUser] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [detailUser, setDetailUser] = useState({});
  const [loading, setLoading] = useState(false);

  const getDataUser = useCallback(async () => {
    if (user?.length === 0) {
      getUser()
        .then((result) => {
          setUser(result.data);
          setFilterUser(result.data);
          return { status: 'OK', result: result.data };
        })
        .catch((error) => ({ status: 'Failed', error }));
    }
  }, []);

  const getDetailUser = async (id) => {
    await setLoading(true);
    getIdUser(id)
      .then((result) => {
        setDetailUser(result);
        setLoading(false);
        return { status: 'OK', result };
      })
      .catch((error) => ({ status: 'Failed', error }));
  };

  return (
    <UserContext.Provider
      value={{
			  setUser,
			  user,
			  filterUser,
			  setFilterUser,
			  getDataUser,
			  getDetailUser,
			  detailUser,
			  setDetailUser,
			  loading,
      }}
      {...props}
    />
  );
}
