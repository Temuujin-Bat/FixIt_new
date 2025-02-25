// Third party
import { AxiosBasicCredentials, Method } from "axios";

// Components
import { DEFAULT_REQ_METHOD, TOKEN_KEY } from "../data/constants";
import { decryptData } from "./crypto_util";

const getToken = () => {
  let token = decryptData(TOKEN_KEY, "localStorage");

  return token;
};

const getDefaultHeaders = (authToken: string | AxiosBasicCredentials) =>
  ({
    Authorization: `Bearer ${getToken() || authToken}`,
    "Content-Type": "application/json; charset=utf-8",
    ACPT: `${getToken() || authToken}`,
  } as unknown as { [key: string]: string });

const getDefaultReqOptions = (method?: Method | string) => ({
  method: method ?? DEFAULT_REQ_METHOD,
  mode: "cors",
  cache: "no-cache",
  data: {},
  headers: {} as HeadersInit,
});

export { getDefaultHeaders, getDefaultReqOptions };
