// Third party
import { createSlice } from '@reduxjs/toolkit';

// Components
import { reducers } from './reducers';
import { IStoresState } from './type';
import { stores } from '../../data/storesData/data';

const initialState: IStoresState = {
  stores,
  singleStore: {} as IStoresState['singleStore'],
  currentPage: 1
};

const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers,
});

export const { setStores, setSingleStore, setStoreCurrentPage } = storesSlice.actions;
export default storesSlice.reducer;
