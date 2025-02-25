import { IBaseResponse } from "./common";
import { TProduct } from "../stores.type";

export type TGetShopProductsRes = IBaseResponse & {
  products: Array<TProduct>;
};
