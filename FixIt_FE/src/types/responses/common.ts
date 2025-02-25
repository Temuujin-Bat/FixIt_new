import { AxiosError } from "axios";

export type TAxiosError = {
  code: string;
  response: {
    status: number;
    data: {
      msg: string;
    };
  };
  request: {
    responseURL: string;
  };
};

export type IBaseResponse = {
  msg: string;
  success: boolean;
  error?: AxiosError & TAxiosError;
};
