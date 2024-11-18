import pool from '~/server/utils/db';

export default defineEventHandler(async (event) => {
    console.log(event, 'event확인');
    const body = await readBody(event);
    console.log('body', body);
    const { text } = body;

    if (!text) {
        throw createError({ statusCode: 400, message: 'Text is required' });
    }

    const [result] = await pool.query('INSERT INTO todos (text) VALUES (?)', [text])
    console.log('result', result);
    return { id: result.insertId, text, completed: false };
});