import { CONTROLLERS } from "../data/constants";

import { useRequest } from "../lib/hooks";
import { TAxiosError } from "../types/responses/common";

export function ProductsController() {
  const { axiosRequest, initRequestOptions } = useRequest();

  const controllerName = CONTROLLERS.PRODUCTS;

  const getShopProducts = <T>(data: {
    shopId: number;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/get`, requestOptions);
  };

  return {
    getShopProducts,
  };
}
