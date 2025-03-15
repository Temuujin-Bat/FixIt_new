// Hooks
import { useAppSelector } from "../../hooks/useAppStore";

// Components
import { getUserAppointments } from "../../store/appointments/selectors";
import { NoAppointments, UserAppointments } from "./components";

const Appointments = () => {
  const userAppointments = useAppSelector(getUserAppointments);

  return (
    <>
      {userAppointments.length > 0 ? (
        <UserAppointments appointments={userAppointments} />
      ) : (
        <NoAppointments />
      )}
    </>
  );
};

export { Appointments };
