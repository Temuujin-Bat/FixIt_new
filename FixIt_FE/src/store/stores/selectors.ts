import { useSelector } from "react-redux";
import { RootState } from "./type";

export function getStoresData() {
  const { stores, singleStore } = useSelector(
    (state: RootState) => state.storesReducer
  );

  return { stores, singleStore };
}

export const getStoreCurrentPage = (state: RootState) => state.storesReducer.currentPage as number;
