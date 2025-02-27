import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Third party
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// Components
import App from './App.tsx';
import { CustomSnackbarProvider } from './layout/providers';
import { persist, store } from './store';

// Style
import './assets/css/common.css';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

createRoot(document.getElementById('root') as HTMLInputElement).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persist}>
            <CustomSnackbarProvider>
              <App />
            </CustomSnackbarProvider>
          </PersistGate>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
