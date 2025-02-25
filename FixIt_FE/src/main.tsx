import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// Third party
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import App from "./App";
import { store, persistor } from "./store";

// Style
import "./assets/common.css";
import { CustomSnackbarProvider } from "./layouts/providers/CustomSnackbarProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={<div style={{ height: "100vh" }} />}>
              <CustomSnackbarProvider>
                <App />
              </CustomSnackbarProvider>
            </Suspense>
          </PersistGate>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
