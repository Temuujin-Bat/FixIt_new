// Third party
import { PayloadAction } from "@reduxjs/toolkit";

// Components
import { IEventsState } from "./type";

const reducers = {
  setUserEvents: (
    state: IEventsState,
    action: PayloadAction<IEventsState["userEvents"]>
  ) => ({
    ...state,
    userEvents: action.payload,
  }),
};

export { reducers };
