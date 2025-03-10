// Components
import { IBaseResponse } from "./common";
import { TBarbershops } from "../index";

export type TBarbershopRes = IBaseResponse & {
  success: boolean;
  msg: string;
  barbershops: TBarbershops[];
};
