import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import moment from "moment-timezone";
import { BEIT_DAGAN_SHOP_ID } from "../../data/tamirData/data";
import { OrdersController } from "../../services/orders.api";
import { useError } from "../useError";
import { IBaseResponse, TAxiosError } from "../../types/responses/common";
import { TCreateOrderReq } from "../../types/requests/orders.type";

export function useCreateOrderAPI() {
  const navigate = useNavigate();
  const { handleReqError } = useError();

  const createOrderApi = (data: TCreateOrderReq["orderData"]) => {
    const payload = {
      orderData: {
        ...data,
        createdAt: moment().format(),
        shopId: BEIT_DAGAN_SHOP_ID,
      },
    };

    return OrdersController().createOrder<IBaseResponse>(payload);
  };

  return useMutation({
    mutationFn: createOrderApi,
    onSuccess: (rsp) => {
      if (rsp?.success) {
        navigate("/checkout/order-success");
      } else if (rsp?.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! create order failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! create order request threw an Exception! ${error}`);
    },
  });
}
