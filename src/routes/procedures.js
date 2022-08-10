/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function GET({ params }) {
	let con = await conFn();

	const procedures = await con
		.query(
			`SELECT  procedure_id, user_id, Date_Format(procedure_date,"%Y-%m-%d") as procedure_date, procedure_name, notes
	FROM procedures ORDER BY procedure_date DESC;`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (procedures) {
		return {
			status: 200,
			body: { procedures }
		};
	}
}

export async function POST({ request }) {
	let con = await conFn();
	const form = await request.formData();
	const procedure_date = form.get('date');
	const procedure_name = form.get('procedure_name');
	const notes = form.get('notes');
	con.query(
		'INSERT INTO procedures (user_id, procedure_date, procedure_name, notes) VALUES (?, ?, ?, ?)',
		['1', procedure_date, procedure_name, notes]
	);
	return {
		body: {
			user_id: '1',
			procedure_date: form.get('date'),
			procedure_name: form.get('procedure_name'),
			notes: form.get('notes')
		}
	};
}

export async function PUT({ request }) {
	console.log('put');
	let con = await conFn();
	const form = await request.formData();
	const procedure_date = form.get('date');
	const procedure_id = form.get('procedure_id');
	const procedure_name = form.get('procedure_name');
	const notes = form.get('notes');
	con.query(
		'UPDATE procedures SET procedure_date = ?, procedure_name = ?, notes = ? WHERE procedure_id = ?',
		[procedure_date, procedure_name, notes, procedure_id]
	);
	return {
		body: {
			procedure_date: form.get('date'),
			procedure_name: form.get('procedure_name'),
			notes: form.get('notes'),
			procedure_id: form.get('procedure_id')
		}
	};
}

export async function DELETE({ request }) {
	console.log('delete');
	let con = await conFn();
	const form = await request.formData();
	const procedure_id = form.get('procedure_id');
	con.query('DELETE FROM procedures WHERE procedure_id = ?', [procedure_id]);
	return {
		body: {
			procedure_id: form.get('procedure_id')
		}
	};
}
