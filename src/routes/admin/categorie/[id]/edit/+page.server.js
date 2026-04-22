


import pool from '$lib/server/database.js';
import  { redirect } from '@sveltejs/kit'

export const actions = {

    edit: async ({request, params}) =>{
        const formData = await request.formData();
        const name = formData.get('name');
        const id = params.id;

        console.log(name);


    await pool.execute(
        'UPDATE categories SET name = ? where id = ?',
        [name, id]
    );

    redirect(303, '/admin/categories');

}

};