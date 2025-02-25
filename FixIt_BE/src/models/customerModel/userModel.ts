import pool from "../../config/db";

const register = async (phone: string, name: string, hashedPassword: string, role: string) => {
  const result = await pool.query('insert into users (phone, name, password, role) values ($1, $2, $3, $4) returning id, phone, name, role', [phone, name, hashedPassword, role]);

  return result.rows[0];
};

export { register };