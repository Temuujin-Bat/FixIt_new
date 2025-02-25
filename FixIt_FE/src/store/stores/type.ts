import { TStores } from "../../types";

export type IStoresState = {
  stores: TStores[];
  singleStore: TStores;
  currentPage: number
};

export type RootState = {
  storesReducer: IStoresState;
};
