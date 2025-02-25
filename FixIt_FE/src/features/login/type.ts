// Components
import { TAxiosError } from "../../types/responses";

export type LoginErrorType = {
  type: "emailNotConfirmed" | "loginError";
} & Partial<TAxiosError>;
