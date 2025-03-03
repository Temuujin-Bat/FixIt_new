import { IBaseResponse } from './common';

type TCustomer = {
  id: number,
  phone: string,
  name: string,
  role: 'customer',
  created_at: string
};

export type TLoginRes = IBaseResponse & {
  success: boolean;
  msg: string;
  accessToken: string;
  customer: TCustomer;
};
