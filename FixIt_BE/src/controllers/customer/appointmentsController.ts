import { Request, Response } from "express";
import {
  createAppointment,
  getServiceDuration
} from "../../models/customerModel/appointmentsModel";

const bookAppointment = async (req: Request, res: Response) => {
  const { customerId, businessId, workerId, serviceId, appointmentTime, notes } = req.body;

  try {
    const serviceDuration = await getServiceDuration(serviceId);
    if (!serviceDuration) {
      res.status(404).json({ message: "Service not found" });
      return;
    }

    const newAppointment = await createAppointment(
      customerId, businessId, workerId, serviceId, appointmentTime, notes
    );

    res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { bookAppointment };