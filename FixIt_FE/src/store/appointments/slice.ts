// Third party
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// Components
import { reducers } from "./reducers";
import { TAppointmentsState } from "./type";
import { PERSIST_KEYS, STORE_SLICES } from "../../utils/enums";

const initialState: TAppointmentsState = {
  userAppointments: [],
};

export const slice = createSlice({
  name: STORE_SLICES.AUTHENTICATE,
  initialState,
  reducers,
});

const appointmentsActions = slice.actions;

const authPersistConfig = {
  key: PERSIST_KEYS.AUTH,
  storage,
  blacklist: ["accessToken"],
};

export { appointmentsActions };
export default persistReducer(authPersistConfig, slice.reducer);
