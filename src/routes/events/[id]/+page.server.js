import pool from '$lib/server/database.js';

export async function load ({ params }) {

    const eventId = params.id;

    const [rows] = await pool.execute('SELECT * from events WHERE id= ?', [eventId]);

    if  (rows.length === 0) {
            error(404, 'Event not found');
    }

    return {
        event: rows[0]
    }
}