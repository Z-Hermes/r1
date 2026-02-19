import pool from '$lib/server/database.js';

export async function load ({ params }) {

    const categorieId = params.id;

    const [rows] = await pool.execute('SELECT * from categories WHERE id= ?', [categorieId]);

    if  (rows.length === 0) {
            error(404, 'Categorie not found');
    }

    return {
        categorie: rows[0]
    }
}