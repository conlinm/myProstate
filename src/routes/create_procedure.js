/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function GET({ url }) {
	let con = await conFn();
	const user_id = url.searchParams.get('user_id') || '';
	// user_id === '' ? (user_id = '1') : user_id;

	console.log({ user_id });
	const procedures = await con
		.query(
			`SELECT procedure_id, user_id, procedure_date, procedure_name, notes 
        FROM procedures WHERE user_id = '${user_id}'`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (procedures) {
		return {
			status: 200,
			body: {
				procedures
			}
		};
	}
	console.log({ procedures });
}

export async function POST({ request }) {
	let con = await conFn();
	const form = await request.formData();
	// const user_id = form.get('user_id');
	const procedure_date = form.get('date');
	const procedure_name = form.get('procedure_name');
	const notes = form.get('notes');
	con.query(
		'INSERT INTO procedures (user_id, procedure_date, procedure_name, notes) VALUES (?, ?, ?, ?)',
		['1', procedure_date, procedure_name, notes]
	);
	return {
		status: 302,
		headers: { Location: '/procedures', accept: JSON }
	};
}
