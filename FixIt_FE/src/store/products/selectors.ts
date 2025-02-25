import { RootState } from '../index';
import { TProduct } from '../../types';

const getSelectedProduct = (state: RootState) => state.productReducer.selectedProduct as TProduct;

const getCheckoutData = (state: RootState) => state.productReducer.checkout;

const getCustomer = (state: RootState) => state.productReducer.customer;

const getProductsFilters = (state: RootState) => state.productReducer.productsFilters;

const getStoreProducts = (state: RootState) => state.productReducer.storeProducts as Array<TProduct>;

const getOrderDetails = (state: RootState) => state.productReducer.orderDetails;

export {
  getSelectedProduct,
  getCheckoutData,
  getStoreProducts,
  getProductsFilters,
  getCustomer,
  getOrderDetails
};
