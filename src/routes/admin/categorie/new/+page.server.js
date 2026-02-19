import pool from '$lib/server/database.js';
import  { redirect } from '@sveltejs/kit'

export const actions = {

    create: async ({request}) =>{
        const formData = await request.formData();
        const name = formData.get('name');

        console.log(name);


    await pool.execute(
        'INSERT INTO categories (name) values (?)',
        [name]
    );

    redirect(303, '/admin/categories');

}

};