import { publicRuntimeConfig } from '../config/env';

const { NEXT_PUBLIC_ENABLE_CONSOLE_LOG_KEY } = publicRuntimeConfig;

export const disableBrowserConsoleLog = () => {
  // Disable by default, but can be re-enabled using param enableConsoleLog=[secret-key-to-enable]
  const urlParams = new URLSearchParams(window.location.search);
  const isURLHasKeyToReEnableConsoleLog = (
    urlParams.get('enableConsoleLog') === NEXT_PUBLIC_ENABLE_CONSOLE_LOG_KEY
  );

  if (!isURLHasKeyToReEnableConsoleLog) {
    window.console.log = () => { };
    window.console.info = () => { };
    window.console.table = () => { };
  }
};
