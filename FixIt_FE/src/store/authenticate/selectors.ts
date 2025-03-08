// Third party
import { RootState } from "../index";

const getCustomerInfo = (state: RootState) => state.authReducer.customerInfo;

const getAccessToken = (state: RootState) => state.authReducer.accessToken;

export { getCustomerInfo, getAccessToken };
