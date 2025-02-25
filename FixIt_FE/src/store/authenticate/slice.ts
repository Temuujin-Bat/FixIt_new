// Third party
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// Components
import { reducers } from "./reducers";
import { IUserState } from "./type";

const initialState: IUserState = {
  userInfo: {} as IUserState["userInfo"],
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers,
});

const authPersistConfig = {
  key: "auth",
  storage,
};

export const { setUserInfo } = authenticateSlice.actions;
export default persistReducer(authPersistConfig, authenticateSlice.reducer);
