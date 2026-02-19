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


import pool from '$lib/server/database.js';
import  { redirect } from '@sveltejs/kit'

export const actions = {

    edit: async ({request, params}) =>{
        const formData = await request.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const startdate = formData.get('startdate');
        const starttime = formData.get('starttime');
        const id = params.id;

        console.log(name, description, startdate, starttime);


    await pool.execute(
        'UPDATE events SET name = ?, description = ?, startdate = ?, starttime = ? where id = ?',
        [name,description,startdate, starttime, id]
    );

    redirect(303, '/admin/events');

}

};