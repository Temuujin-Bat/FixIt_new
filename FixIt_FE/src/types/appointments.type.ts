export type TAppointment = {
  id: number;
  barbershopId: number;
  workerId: number;
  serviceId: number;
  userId: number;
  date: string;
  startTime: string;
  endTime: string;
  note: string;
};
