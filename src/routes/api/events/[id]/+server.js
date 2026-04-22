import pool from '$lib/server/database.js';

export async function GET({params}) {

    const id = params.id;
    const [rows] = await pool.query('SELECT * from events where id=?', [id]);

    if (rows.length == 0) {
        return Response.json({message: 'Event not found'}, {status: 404})
    }

    return Response.json(rows[0]);
}

export async function DELETE({params}) {
    const id = params.id;
    const [result] = await pool.query('DELETE FROM events WHERE id=?', [id]);

    if (result.affectedRows === 0) {
        return Response.json({ message: 'Event not found'}, {status: 404})
    }
    return Response.json({message: 'Event deleted'});
}

export async function PUT({request,params}) {
    const id = params.id;
    const {anme, description, startdate, starttime} = await request.json();
    const [result] = await pool.query('UPDATE events SET name = ?, description = ?, startdate = ?, starttime = ?, category = ? where id = ?', [name, description, startdate, starttime, category, id]);

    if (result.affectedRows === 0) {
        return Response.json({ massage: 'Event not found'}, {status: 404})
    }
    return Response.json({message: 'Event updated'});
}