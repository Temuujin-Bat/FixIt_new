// Third party
import { PayloadAction } from "@reduxjs/toolkit";

// Components
import { TAppointmentsState } from "./type";

const reducers = {
  setUserAppointments: (
    state: TAppointmentsState,
    action: PayloadAction<TAppointmentsState["userAppointments"]>,
  ) => ({
    ...state,
    userAppointments: action.payload,
  }),
};

export { reducers };
