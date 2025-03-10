// Components
import { IBaseResponse } from "./common";
import { TAppointment } from "../index";

export type TAppointmentsRes = IBaseResponse & {
  success: boolean;
  msg: string;
  appointments: TAppointment[];
};
