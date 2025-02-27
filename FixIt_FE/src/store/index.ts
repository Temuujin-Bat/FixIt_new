// Third party
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, } from 'redux-persist';

// Components
import authReducer from './authenticate/slice';

const store = configureStore({
  reducer: {
    authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),

});

const persist = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export {
  store,
  persist,
};
