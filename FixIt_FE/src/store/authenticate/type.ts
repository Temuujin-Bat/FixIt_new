// Components
import { TCustomer } from '../../types';

export type TCustomerState = {
  customerInfo: TCustomer;
};

export type RootState = {
  authenticateReducer: TCustomerState;
};
