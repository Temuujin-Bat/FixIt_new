import { PayloadAction } from '@reduxjs/toolkit';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';
import sum from 'lodash/sum';
import { IRootState } from './type';
import { TCheckoutCartItem } from '../../types';

const reducers = {
  setSelectedProduct: (
    state: IRootState,
    action: PayloadAction<IRootState['selectedProduct']>,
  ) => ({
    ...state,
    selectedProduct: action.payload,
  }),
  setProductsFilters: (
    state: IRootState,
    action: PayloadAction<IRootState['productsFilters']>,
  ) => ({
    ...state,
    productsFilters: action.payload,
  }),
  resetProductsFilters: (
    state: IRootState,
    _: PayloadAction<IRootState['productsFilters']>,
  ) => ({
    ...state,
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
  }),
  setStoreProducts: (
    state: IRootState,
    action: PayloadAction<IRootState['storeProducts']>,
  ) => ({
    ...state,
    storeProducts: action.payload,
  }),
  addToCart(state: IRootState, action: PayloadAction<TCheckoutCartItem>) {
    const newProduct = action.payload;

    // Check if the cart is empty
    const isEmptyCart = !state.checkout.cart.length;

    let updatedCart;
    if (isEmptyCart) {
      updatedCart = [newProduct];
    } else {
      updatedCart = state.checkout.cart.map((product) => {
        if (Number(product.id) === Number(newProduct.id)) {
          return {
            ...product,
            colors: uniq([...product.colors, ...newProduct.colors]),
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      updatedCart = uniqBy([...updatedCart, newProduct], 'id');
    }

    return {
      ...state,
      checkout: {
        ...state.checkout,
        cart: updatedCart,
        totalItems: sum(updatedCart.map((product) => product.quantity)),
      },
    };
  },
  deleteCart(state: IRootState, action: PayloadAction<number>) {
    const updateCart = state.checkout.cart.filter((product) => Number(product.id) !== Number(action.payload));

    return {
      ...state,
      checkout: {
        ...state.checkout,
        cart: updateCart,
      },
    };
  },
  applyDiscount(state: IRootState, action: PayloadAction<string | number>) {
    const discount = typeof action.payload === 'number' ? action.payload : parseFloat(action.payload);

    return {
      ...state,
      checkout: {
        ...state.checkout,
        discount,
        total: state.checkout.subtotal - discount,
      },
    };
  },
  increaseQuantity(state: IRootState, action: PayloadAction<string | number>) {
    const productId = action.payload;

    const updateCart = state.checkout.cart.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    return {
      ...state,
      checkout: {
        ...state.checkout,
        cart: updateCart,
      },
    };
  },

  decreaseQuantity(state: IRootState, action: PayloadAction<string | number>) {
    const productId = action.payload;
    const updateCart = state.checkout.cart.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });

    return {
      ...state,
      checkout: {
        ...state.checkout,
        cart: updateCart,
      },
    };
  },
  resetCart(state: IRootState) {
    return {
      ...state,
      checkout: {
        ...state.checkout,
        cart: [],
        billing: null,
        total: 0,
        subtotal: 0,
        discount: 0,
        shipping: 0,
        totalItems: 0,
      },
    };
  },
  setCustomer: (
    state: IRootState,
    action: PayloadAction<IRootState['customer']>,
  ) => ({
    ...state,
    customer: action.payload,
  }),
  setOrderDetails: (
    state: IRootState,
    action: PayloadAction<IRootState['orderDetails']>,
  ) => ({
    ...state,
    orderDetails: action.payload,
  }),
};

export { reducers };
