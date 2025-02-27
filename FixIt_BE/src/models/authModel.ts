import pool from '../config/db';

// Find user by phone & role
const findUserByPhoneAndRole = async (phone: string, role: string) => {
  const result = await pool.query('select * from users where phone = $1 and role = $2', [phone, role]);

  return result.rows[0];
};
as
export { findUserByPhoneAndRole };