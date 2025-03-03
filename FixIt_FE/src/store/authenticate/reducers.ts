// Third party
import { PayloadAction } from "@reduxjs/toolkit";

// Components
import { TCustomerState } from "./type";

const reducers = {
  setCustomerInfo: (
    state: TCustomerState,
    action: PayloadAction<TCustomerState["customerInfo"]>,
  ) => ({
    ...state,
    customerInfo: action.payload,
  }),
  setAccessToken: (
    state: TCustomerState,
    action: PayloadAction<TCustomerState["accessToken"]>,
  ) => ({
    ...state,
    accessToken: action.payload,
  }),
  setIsRefreshing: (
    state: TCustomerState,
    action: PayloadAction<TCustomerState["isRefreshing"]>,
  ) => ({
    ...state,
    isRefreshing: action.payload,
  }),
};

export { reducers };
