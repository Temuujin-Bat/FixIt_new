import { TCheckoutCartItem, TProduct, TProductsFilters } from '../../types';

export type TCheckoutBillingAddress = {
  receiver: string;
  phoneNumber: string;
  fullAddress: string;
  addressType: string;
  isDefault: boolean;
};

export type IProductCheckoutState = {
  cart: TCheckoutCartItem[];
  subtotal: number;
  total: number;
  discount: number;
  shipping: number;
  billing: TCheckoutBillingAddress | null;
  totalItems: number;
};

export type IRootState = {
  selectedProduct: TProduct;
  checkout: IProductCheckoutState
  storeProducts: Array<TProduct>
  productsFilters: TProductsFilters
  customer: {
    phoneNumber: { phoneString: string },
    email: string,
    name: string,
    streetAddress?: string,
    zipcode?: string | number,
    city?: string,
  }
  orderDetails: {
    shopId: string,
    orderId: string,
    orderUuid: string,
  }
};
