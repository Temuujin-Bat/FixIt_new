// Third party
import { PayloadAction } from "@reduxjs/toolkit";

// Components
import { TBarbershopsState } from "./type";

const reducers = {
  setBarbershops: (
    state: TBarbershopsState,
    action: PayloadAction<TBarbershopsState["barbershops"]>,
  ) => ({
    ...state,
    barbershops: action.payload,
  }),
};

export { reducers };
