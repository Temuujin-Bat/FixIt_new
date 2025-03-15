import pool from '../../config/db';

// Find user by phone & role
const findUserByPhone = async (phone: string) => {
  const result = await pool.query('select * from users where phone = $1', [phone]);

  return result.rows[0];
};

const updateRefreshToken = async (userId: number, refreshToken: string) => {
  await pool.query('UPDATE users SET refresh_token = $1 WHERE id = $2', [refreshToken, userId]);
};

const removeRefreshToken = async (refreshToken: string) => {
  return await pool.query('UPDATE users SET refresh_token = NULL WHERE refresh_token = $1', [refreshToken]);
};

export { findUserByPhone, updateRefreshToken, removeRefreshToken };
