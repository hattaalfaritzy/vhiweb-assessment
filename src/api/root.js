import axios from 'axios';
import queryString from 'query-string';
import { publicRuntimeConfig } from '../config/env';

const { NEXT_PUBLIC_API_HOST, NEXT_PUBLIC_API_TIMEOUT } = publicRuntimeConfig;
const timeout = Number(NEXT_PUBLIC_API_TIMEOUT || 15000);

const guestBearerToken = 'token1';

export const fetchApi = async ({
  url,
  path,
  method = 'GET',
  data,
  params,
  headers,
  isExternalResource,
  isGuest,
  usingFetch,
  req,
  customToken,
  ...rest
}) => {
  const token = 'No Token';

  let authorizationToken = token && !isGuest ? localStorage.getItem('token') : guestBearerToken;
  if (customToken) {
    authorizationToken = `Bearer ${customToken}`;
  }

  const internalResourceAdditionalHeaders = {
    'x-access-token': authorizationToken,
    'Client-Version': 'web 0.1.0 20211222',
  };

  const finalHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(isExternalResource ? {} : internalResourceAdditionalHeaders),
    ...headers,
  };

  if (usingFetch) {
    const fetchResponse = await fetch(
      `${NEXT_PUBLIC_API_HOST}${url}?${queryString.stringify(params)}`,
      {
        method,
        headers: finalHeaders,
        credentials: 'include',
        body: JSON.stringify(data),
        ...rest,
      },
    );

    return fetchResponse.json();
  }

  const response = await axios({
    timeout,
    baseURL: NEXT_PUBLIC_API_HOST,
    url: url || path,
    method,
    data,
    params,
    headers: finalHeaders,
    ...rest,
  });

  return response.data;
};
