// Third party
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// Components
import { reducers } from "./reducers";
import { PERSIST_KEYS, STORE_SLICES } from "../../utils/enums";
import { TBarbershopsState } from "./type";

const initialState: TBarbershopsState = {
  barbershops: [],
};

export const slice = createSlice({
  name: STORE_SLICES.BARBERSHOPS,
  initialState,
  reducers,
});

const barbershopsActions = slice.actions;

const authPersistConfig = {
  key: PERSIST_KEYS.BARBERSHOPS,
  storage,
  blacklist: [],
};

export { barbershopsActions };
export default persistReducer(authPersistConfig, slice.reducer);
