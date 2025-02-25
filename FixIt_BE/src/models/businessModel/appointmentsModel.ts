import pool from "../../config/db";

const getBusinessAppointments = async (businessOwnerId: number) => {
  const result = await pool.query(
    `SELECT a.id   AS appointment_id,
            c.name AS customer_name,
            w.name AS worker_name,
            s.name AS service_name,
            a.appointment_time,
            a.status
     FROM appointments a
              LEFT JOIN users c ON a.customer_id = c.id
              LEFT JOIN workers w ON a.worker_id = w.id
              LEFT JOIN services s ON a.service_id = s.id
     WHERE a.business_id = $1
     ORDER BY a.appointment_time ASC`,
    [businessOwnerId]
  );

  return result.rows;
};

export { getBusinessAppointments };
