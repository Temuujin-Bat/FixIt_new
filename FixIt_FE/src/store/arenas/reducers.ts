// Third party
import { PayloadAction } from "@reduxjs/toolkit";

// Components
import { IArenasState } from "./type";

const reducers = {
  setOpenArenas: (
    state: IArenasState,
    action: PayloadAction<IArenasState["openArenas"]>
  ) => ({
    ...state,
    openArenas: action.payload,
  }),
  setSingleOpenArena: (
    state: IArenasState,
    action: PayloadAction<IArenasState["singleOpenArena"]>
  ) => ({
    ...state,
    singleOpenArena: action.payload,
  }),
};

export { reducers };
