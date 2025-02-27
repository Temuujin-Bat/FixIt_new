// Third party
import { PayloadAction } from '@reduxjs/toolkit';

// Components
import { TCustomerState } from './type';

const reducers = {
  setCustomerInfo: (
    state: TCustomerState,
    action: PayloadAction<TCustomerState['customerInfo']>
  ) => ({
    ...state,
    customerInfo: action.payload,
  }),
};

export { reducers };

