import pool from "../../config/db";

const register = async (phone: string, name: string, hashedPassword: string, role: string) => {
  const result = await pool.query('insert into users (phone, name, password, role) values ($1, $2, $3, $4) returning id, phone, name, role', [phone, name, hashedPassword, role]);

  return result.rows[0];
};

const findUserById = async (id: number) => {
  const result = await pool.query("SELECT id, phone, name, refresh_token, name_changes FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

const incrementNameChangeCount = async (userId: string) => {
  await pool.query("UPDATE users SET name_changes = name_changes + 1 WHERE id = $1", [userId]);
};
const updateUser = async (id: number, updatedData: { name?: string; }) => {
  const { name } = updatedData;

  const result = await pool.query(`update users
                                   set name = coalesce($1, name)
                                   where id = $2
                                   returning id, name`, [name, id]);

  return result.rows[0];
};

export { register, findUserById, incrementNameChangeCount, updateUser };