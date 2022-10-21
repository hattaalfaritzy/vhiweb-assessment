import { fetchApi } from './root';

export const getUser = (data) => fetchApi({
  url: '/users',
  method: 'GET',
  data,
  params: data?.params,
});

export const getIdUser = (id) => fetchApi({
  url: `/users/${id}`,
  method: 'GET',
});
