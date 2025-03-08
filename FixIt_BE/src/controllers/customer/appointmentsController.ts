import { Request, Response } from "express";
import { getAllBarbershops } from "../../models/customer/appointmentsModel";

const getAllBarbershopsController = async (req: Request, res: Response) => {
  try {
    const barbershops = await getAllBarbershops();

    res.status(200).json({
      success: true,
      msg: "Successfully retrieved all barbershops",
      barbershops,
    });
  } catch (error) {
    console.error("Get All Appointment Error:", error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

export { getAllBarbershopsController };
