// Third party
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
  PAUSE,
  REHYDRATE,
} from "redux-persist";

// Components
import storesReducer from "./stores/slice";
import arenasReducer from "./arenas/slice";
import authenticateReducer from "./authenticate/slice";
import userEventsReducer from "./userEvents/slice";
import eventsReducer from "./events/slice";
import productReducer from "./products/slice";

const store = configureStore({
  reducer: {
    storesReducer,
    arenasReducer,
    authenticateReducer,
    userEventsReducer,
    eventsReducer,
    productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
