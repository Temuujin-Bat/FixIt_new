import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Third party
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter } from "react-router-dom";

// Components
import App from './App.tsx'
import { CustomSnackbarProvider } from "./layout/providers";

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <CustomSnackbarProvider>
            <App />
          </CustomSnackbarProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
