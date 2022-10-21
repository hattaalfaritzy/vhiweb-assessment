import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import MultiProvider from '../../config/multi-provider';
import Provider from '../../contexts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default function Core({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MultiProvider
        providers={[
          <Provider.AuthProvider key={1} />,
          <Provider.UserProvider key={2} />,
        ]}
      >
        {children}
      </MultiProvider>
    </QueryClientProvider>
  );
}

Core.propTypes = {
  children: PropTypes.node,
};
