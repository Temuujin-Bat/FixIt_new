import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../useAppStore";
import { ProductsController } from "../../services/products.api";
import { QUERY_KEYS } from "../../utils/enums";
import { TGetShopProductsRes } from "../../types/responses/products";
import { useError } from "../useError";
import { productActions } from "../../store/products/slice";

export function useGetShopProductsAPI() {
  const dispatch = useAppDispatch();
  const { handleReqError } = useError();

  const selectedShop = 20;

  return useQuery({
    initialData: undefined,
    queryKey: [QUERY_KEYS.SHOP.GET_SHOP_PRODUCTS],
    queryFn: async () => {
      if (!selectedShop) {
        throw new Error("No shop selected!");
      }

      const data = { shopId: selectedShop };
      const rsp =
        await ProductsController().getShopProducts<TGetShopProductsRes>(data);

      if (rsp?.success && "products" in rsp) {
        dispatch(productActions.setStoreProducts(rsp.products));
      } else if (rsp?.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! get shop products failed! ${rsp.msg}`);
      }

      return rsp;
    },
    staleTime: 3 * 60 * 1000,
    enabled: !!selectedShop,
  });
}
