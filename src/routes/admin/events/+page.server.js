import pool from "$lib/server/database.js";
import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    if (!locals.user) redirect(302, '/login');

    const [rows] = await pool.execute('SELECT e.id as id, c.name as category_name, e.name as name from events e LEFT JOIN categories c ON e.category_id = c.id');

    return {
        pageTitle: "list of events",
        events: rows
    }
}

export const actions = {

    delete: async ({request}) => {
        const formData = await request.formData();
        const id = formData.get('id');
        await pool.execute('Delete FROM events where id = ?', [id]);
        return{
            success: true
        };
    }
}