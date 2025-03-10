// Third party
import { Request, Response } from "express";

// Components
import { getUserAppointments } from '../../models/customer/appointmentsModel';

const userAppointments = async (req: Request, res: Response) => {
  const { phone } = req.body;

  try {
    const userAppointments = await getUserAppointments(phone);

    res.status(200).json({
      success: true,
      msg: "Successfully retrieved all user appointments",
      userAppointments,
    });
  } catch (error) {
    console.error("Get All User Appointment Error:", error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

export { userAppointments };
