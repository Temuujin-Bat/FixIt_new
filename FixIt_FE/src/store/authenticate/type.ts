import { IUSER } from "../../types";

export type IUserState = {
  userInfo: IUSER;
};

export type RootState = {
  authenticateReducer: IUserState;
};
