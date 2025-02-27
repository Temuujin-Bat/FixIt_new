import { IBaseResponse } from './common';

type TCustomer = {
  address?: string;
  avatarFile?: string;
  club?: string;
  createdAt?: string;
  displayName?: string;
  email?: string;
  isRegistered?: boolean;
  name?: string;
  password?: string;
  phone?: string;
  status?: 'pending';
  team?: string | null;
  ukey?: string | null;
  updatedAt?: string;
};

export type TCustomerRes = IBaseResponse & {
  success: boolean;
  msg: string;
  customer: TCustomer;
};
