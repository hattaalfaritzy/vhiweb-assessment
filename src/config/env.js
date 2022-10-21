import getConfig from 'next/config';

const config = getConfig() || {};

const isConfigHasValue = Boolean(config.publicRuntimeConfig?.NEXT_PUBLIC_API_HOST);

const configAlternative = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_ENVIRONTMENT: process.env.NEXT_PUBLIC_ENVIRONTMENT,
    NEXT_PUBLIC_MOCK_API_HOST: process.env.NEXT_PUBLIC_MOCK_API_HOST,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    NEXT_PUBLIC_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT,
  },
  serverRuntimeConfig: {},
};

export const publicRuntimeConfig = isConfigHasValue
  ? config.publicRuntimeConfig
  : configAlternative.publicRuntimeConfig;

export const serverRuntimeConfig = isConfigHasValue
  ? config.serverRuntimeConfig
  : configAlternative.serverRuntimeConfig;
