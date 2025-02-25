import { TProduct } from "../stores.type";

export type TCreateOrderReq = {
  orderData: {
    createAt: string;
    shopId: number;
    lineItems: Array<{
      quantity: number;
      product: TProduct;
    }>;
    customer: {
      phoneNumber: { phoneString: string };
      email: string;
      name: string;
    };
    shippingMethod: string;
    shippingPrice: number;
    subTotal: number;
    isPaid: boolean;
    paymentMethod: string;
  };
};
