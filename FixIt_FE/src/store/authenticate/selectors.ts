// Third party
import { RootState } from '../index';

const getCustomerInfo = (state: RootState) => state.authReducer.customerInfo;

export { getCustomerInfo };