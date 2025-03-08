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
  resetAuthState: () => ({
    customerInfo: {} as TCustomerState["customerInfo"],
    accessToken: null,
  }),
};

export { reducers };
