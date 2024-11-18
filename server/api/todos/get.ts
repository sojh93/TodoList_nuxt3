import pool from '~/server/utils/db';

export default defineEventHandler(async () => {
    const [rows] = await pool.query('SELECT * FROM todos');
    return rows;
});