// Third party
import { RootState } from "../index";

const getUserAppointments = (state: RootState) =>
  state.appointmentsReducer.userAppointments;

export { getUserAppointments };
