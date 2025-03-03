// Third party
import { RootState } from "../index";

const getCustomerInfo = (state: RootState) => state.authReducer.customerInfo;

const getSuccessToken = (state: RootState) => state.authReducer.accessToken;

const getIsRefreshing = (state: RootState) => state.authReducer.isRefreshing;

export { getCustomerInfo, getSuccessToken, getIsRefreshing };
