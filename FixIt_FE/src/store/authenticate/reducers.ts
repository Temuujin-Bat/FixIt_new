import { PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./type";

const reducers = {
  setUserInfo: (
    state: IUserState,
    action: PayloadAction<IUserState["userInfo"]>
  ) => ({
    ...state,
    userInfo: action.payload,
  }),
};

export { reducers };
