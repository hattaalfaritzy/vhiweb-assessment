import { useContext } from 'react';
import _ from 'lodash';
import { UserContext } from '../contexts/index';

export default function useUser() {
  const {
    getDataUser, user, setUser, setFilterUser, filterUser, getDetailUser, detailUser,
  } = useContext(UserContext);

  return {
    getDataUser,
    filterUser: _.orderBy(filterUser, ['created_at'], ['desc']).slice(0, 10),
    user: _.orderBy(user, ['created_at'], ['desc']).slice(0, 10),
    getDetailUser,
    detailUser,
    setUser,
    setFilterUser,
  };
}
