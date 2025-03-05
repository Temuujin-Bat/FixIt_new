import pool from '../../config/db';

// Find user by phone & role
const findUserByPhoneAndRole = async (phone: string, role: string) => {
  const result = await pool.query('select * from users where phone = $1 and role = $2', [phone, role]);

  return result.rows[0];
};

const updateRefreshToken = async (userId: number, refreshToken: string) => {
  await pool.query('UPDATE users SET refresh_token = $1 WHERE id = $2', [refreshToken, userId]);
};

const removeRefreshToken = async (refreshToken: string) => {
  return await pool.query('UPDATE users SET refresh_token = NULL WHERE refresh_token = $1', [refreshToken]);
};

export { findUserByPhoneAndRole, updateRefreshToken, removeRefreshToken };
