import { useRequest } from "../lib/hooks";
import { CONTROLLERS } from "../data/constants";
import { TAxiosError } from "../types/responses/common";
import { TCreateOrderReq } from "../types/requests/orders.type.ts";

export function OrdersController() {
  const { axiosRequest, initRequestOptions } = useRequest();

  const controllerName = CONTROLLERS.ORDERS;

  const createOrder = <T>(
    data: TCreateOrderReq
  ): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/create`, requestOptions);
  };

  return {
    createOrder,
  };
}
