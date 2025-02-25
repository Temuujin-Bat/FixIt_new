// Third party
import { createSlice } from '@reduxjs/toolkit';

// Components
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducers } from './reducers';
import { IRootState } from './type';

const initialState: IRootState = {
  selectedProduct: {} as IRootState['selectedProduct'],
  checkout: {
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
    totalItems: 0,
  },
  customer: {} as IRootState['customer'],
  productsFilters: {
    filterBrand: [],
    filterCategories: '',
    filterStock: false,
    filterSale: false,
    filterPrice: {
      start: 0,
      end: 0,
    },
  },
  storeProducts: [],
  orderDetails: {} as IRootState['orderDetails'],
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers,
});

const productActions = slice.actions;

const productPersistConfig = {
  key: 'products',
  storage,
  blacklist: ['productsFilters'],
};

export {
  productActions,
};

export default persistReducer(productPersistConfig, slice.reducer);
