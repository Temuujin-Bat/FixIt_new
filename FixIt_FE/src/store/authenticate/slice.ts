// Third party
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// Components
import { reducers } from './reducers';
import { TCustomerState } from './type';
import { PERSIST_KEYS, STORE_SLICES } from '../../utils/enums';

const initialState: TCustomerState = {
  customerInfo: {} as TCustomerState['customerInfo'],
};

export const slice = createSlice(({
  name: STORE_SLICES.AUTHENTICATE,
  initialState,
  reducers,
}));

const authenticateActions = slice.actions;

const authPersistConfig = {
  key: PERSIST_KEYS.AUTH,
  storage,
};

export {
  authenticateActions,
};
export default persistReducer(authPersistConfig, slice.reducer);
