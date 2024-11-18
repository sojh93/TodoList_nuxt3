import pool from '~/server/utils/db';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const { id } = query;

    if (!id) {
        throw createError({ statusCode: 400, message: 'ID is required' });
    }

    await pool.query('DELETE FROM todos WHERE id = ?', [id]);
    return { id };
});