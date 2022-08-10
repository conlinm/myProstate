/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function GET({ url }) {
	let con = await conFn();
	const user_id = url.searchParams.get('user_id') || '';
	// user_id === '' ? (user_id = '1') : user_id;

	console.log({ user_id });
	const visits = await con
		.query(
			`SELECT visit_id, user_id, visit_date, doctor_name, notes 
        FROM clinic_visits WHERE user_id = '${user_id}'`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (visits) {
		return {
			status: 200,
			body: {
                visits
			}
		};
	}
	console.log({ visits });
}

export async function POST({ request }) {
	let con = await conFn();
	const form = await request.formData();
	// const user_id = form.get('user_id');
	const visit_date = form.get('visit_date');
    const doctor_name = form.get('doctor_name');
	const notes = form.get('notes');
	con.query(
		'INSERT INTO clinic_visits (user_id, visit_date, doctor_name, notes) VALUES (?, ?, ?, ?)',
		['1', visit_date, doctor_name, notes]
	);
	return {
        status: 302,
		headers: { Location: '/visits',
                    accept: JSON }
		
	};
}
