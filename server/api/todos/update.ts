import pool from '~/server/utils/db';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { id, text, completed } = body;

    if (!id) {
        throw createError({ statusCode: 400, message: 'ID is required' });
    }

    await pool.query('UPDATE todos SET text = ?, completed = ? WHERE id = ?', [text, completed, id]);
    return { id, text, completed };
});