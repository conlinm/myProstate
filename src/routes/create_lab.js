/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function GET({ url }) {
	let con = await conFn();
	const user_id = url.searchParams.get('user_id') || '';
	// user_id === '' ? (user_id = '1') : user_id;

	console.log({ user_id });
	const labs = await con
		.query(
			`SELECT lab_id, user_id, lab_date, lab_name, lab_value, notes 
        FROM labs WHERE user_id = '${user_id}'`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (labs) {
		return {
			status: 200,
			body: {
				labs
			}
		};
	}
	console.log({ labs });
}

export async function POST({ request }) {
	let con = await conFn();
	const form = await request.formData();
	// const user_id = form.get('user_id');
	const lab_date = form.get('date');
	const lab_name = form.get('lab_name');
	const lab_value = form.get('lab_value');
	const notes = form.get('notes');
	con.query(
		'INSERT INTO labs (user_id, lab_date, lab_name, lab_value, notes) VALUES (?, ?, ?, ?, ?)',
		['1', lab_date, lab_name, lab_value, notes]
	);
	return {
		status: 302,
		headers: { Location: '/labs', accept: JSON }
	};
}
