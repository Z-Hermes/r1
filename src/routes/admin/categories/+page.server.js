import pool from "$lib/server/database.js";

export async function load() {

    const [rows] = await pool.execute('SELECT * from categories');

    return {
        pageTitle: "list of categories",
        categories: rows
    }
}

export const actions = {

    delete: async ({request}) => {
        const formData = await request.formData();
        const id = formData.get('id');
        await pool.execute('Delete FROM categories where id = ?', [id]);
        return{
            success: true
        };
    }
}