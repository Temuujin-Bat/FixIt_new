import pool from '../config/db';

// Find user by phone & role
const findUserByPhoneAndRole = async (phone: string, role: string) => {
  const result = await pool.query('select * from users where phone = $1 and role = $2', [phone, role]);

  return result.rows[0];
};

const updateRefreshToken = async (userId: number, refreshToken: string) => {
  return await pool.query('update users set refresh_token = $1 where id =$2', [refreshToken, userId]);
};

const findUserByRefreshToken = async (userId: number, refreshToken: string) => {
  const result = await pool.query('select * from users where id = $1 and refresh_token = $2', [userId, refreshToken]);

  return result.rows[0];
};

const removeRefreshToken = async (refreshToken: string) => {
  return await pool.query('UPDATE users SET refresh_token = NULL WHERE refresh_token = $1', [refreshToken]);
};

export { findUserByPhoneAndRole, updateRefreshToken, findUserByRefreshToken, removeRefreshToken };
