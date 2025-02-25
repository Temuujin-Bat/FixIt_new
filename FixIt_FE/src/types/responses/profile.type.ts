import { IBaseResponse } from "./common";

type IUSER = {
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
  status?: "pending";
  team?: string | null;
  ukey?: string | null;
  updatedAt?: string;
};

export type TGetProfileRes = IBaseResponse & {
  success: boolean;
  msg: string;
  user: IUSER;
};

export type TSetAvatarRes = IBaseResponse & {
  success: boolean;
  msg: string;
  fileName: string;
  resultUrl: string;
};
