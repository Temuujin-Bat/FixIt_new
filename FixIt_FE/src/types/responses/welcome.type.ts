import { IBaseResponse } from "./common";

export type TLoginRes = IBaseResponse & {
  success: boolean;
  msg: string;
  data: {
    authToken?: string;
  };
};
