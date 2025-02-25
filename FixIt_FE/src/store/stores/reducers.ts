import { PayloadAction } from '@reduxjs/toolkit';
import { IStoresState } from './type';

const reducers = {
  setStores: (
    state: IStoresState,
    action: PayloadAction<IStoresState['stores']>
  ) => ({
    ...state,
    stores: action.payload,
  }),
  setSingleStore: (
    state: IStoresState,
    action: PayloadAction<IStoresState['singleStore']>
  ) => ({
    ...state,
    singleStore: action.payload,
  }),
  setStoreCurrentPage: (
    state: IStoresState,
    action: PayloadAction<IStoresState['currentPage']>,
  ) => ({
    ...state,
    currentPage: action.payload,
  }),
};

export { reducers };
