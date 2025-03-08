// Components
import { TCustomer } from "../../types";

export type TCustomerState = {
  customerInfo: TCustomer;
  accessToken: string | null;
};
