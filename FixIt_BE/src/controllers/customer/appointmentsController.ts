import { Request, Response } from "express";
import {
  cancelAppointment,
  createAppointment, findAppointmentById,
  getServiceDuration
} from "../../models/customerModel/appointmentsModel";

interface AuthRequest extends Request {
  user?: any;
}

const bookAppointmentController = async (req: AuthRequest, res: Response) => {
  const { businessId, workerId, serviceId, appointmentTime, notes } = req.body;

  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized. Please log in." });
      return;
    }

    const customerId = req.user.id;

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

const cancelAppointmentController = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized. Please log in." });
      return;
    }

    const customerId = req.user.id;
    const { appointmentId } = req.body;
    if (!appointmentId) {
      res.status(400).json({ message: 'Appointment ID is required' });
      return;
    }

    const appointment = await findAppointmentById(appointmentId);
    if (!appointment) {
      res.status(404).json({ message: "Appointment not found" });
      return;
    }

    await cancelAppointment(parseInt(appointmentId));

  } catch (error) {
    console.error("Cancel Appointment Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export { bookAppointmentController, cancelAppointmentController };