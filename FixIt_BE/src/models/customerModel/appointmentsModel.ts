import pool from "../../config/db";

const getServiceDuration = async (serviceId: number) => {
  const result = await pool.query("SELECT duration FROM services WHERE id = $1", [serviceId]);
  return result.rows[0] || null;
};

const createAppointment = async (
  customerId: number,
  businessId: number,
  workerId: number,
  serviceId: number,
  appointmentTime: Date,
  notes: string | null
) => {
  const result = await pool.query(
    `INSERT INTO appointments 
     (customer_id, business_id, worker_id, service_id, appointment_time, notes, status)
     VALUES ($1, $2, $3, $4, $5, $6, 'booked')
     RETURNING *`,
    [customerId, businessId, workerId, serviceId, appointmentTime, notes || null]
  );
  return result.rows[0];
};

export { getServiceDuration, createAppointment };