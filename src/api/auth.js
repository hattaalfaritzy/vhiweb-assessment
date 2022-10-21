import { fetchApi } from './root';

export const login = (data) => fetchApi({
  url: '/login',
  method: 'POST',
  data,
});

export const getUserDetail = () => fetchApi({
  url: '/users',
  method: 'GET',
});
