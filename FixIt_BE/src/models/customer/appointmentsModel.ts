// Components
import pool from "../../config/db";

const getUserAppointments = async (phone: string) => {
  const query = `SELECT id,
                        barbershopId,
                        workerId,
                        serviceId,
                        customerName,
                        phone,
                        date,
                        startTime,
                        endTime,
                        note,
                        createdAt
                 FROM appointments
                 WHERE phone = $1
                 ORDER BY date DESC, startTime ASC`;

  const { rows } = await pool.query(query, [phone]);
  return rows;
};

export { getUserAppointments };
