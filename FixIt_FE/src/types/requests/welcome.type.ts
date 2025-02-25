export type TLoginReq = {
  email: string;
  password: string;
};

export type TRegisterReq = {
  name: string;
  displayName: string;
  phone?: any;
  address?: any;
  club?: string;
  team?: string;
  avatarFile?: string;
  email: string;
  password: string;
};
