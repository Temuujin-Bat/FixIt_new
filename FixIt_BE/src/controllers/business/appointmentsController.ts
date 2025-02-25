import { Request, Response } from "express";
import { getBusinessAppointments } from "../../models/businessModel/appointmentsModel";


interface AuthRequest extends Request {
  user?: { id: number };
}

const getBusinessAppointmentsController = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized. Please log in." });
      return;
    }

    const businessOwnerId = req.user.id;

    const appointments = await getBusinessAppointments(businessOwnerId);

    res.status(200).json({ appointments });
  } catch (error) {
    console.error("Get Business Appointments Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { getBusinessAppointmentsController };
