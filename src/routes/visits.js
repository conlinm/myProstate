/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function GET({ params }) {
	let con = await conFn();

	const visits = await con
		.query(
			`SELECT  visit_id, user_id, Date_Format(visit_date,"%Y-%m-%d") as visit_date, doctor_name, notes
	FROM clinic_visits ORDER BY visit_date DESC;`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (visits) {
		return {
			status: 200,
			body: { visits }
		};
	}
}

export async function POST({ request }) {
	let con = await conFn();
	const form = await request.formData();
	const visit_date = form.get('date');
	const notes = form.get('note');
	con.query(
		'INSERT INTO clinic_visits (user_id, visit_date, notes) VALUES (?, ?)',
		['1', visit_date, notes]
	);
	return {
		body: {
			user_id: '1',
			visit_date: form.get('date'),
			notes: form.get('notes')
		}
	};
}

export async function PUT({ request }) {
	console.log('put');
	let con = await conFn();
	const form = await request.formData();
	const visit_date = form.get('date');
	const notes = form.get('note');
	const visits_id = form.get('visit_id');
	con.query('UPDATE clinic_visits SET visit_date = ?, notes = ? WHERE visit_id = ?', [
		visit_date,
		notes,
		visits_id
	]);
	return {
		body: {
			visit_date: form.get('date'),
			notes: form.get('note'),
			visits_id: form.get('visit_id')
		}
	};
}

export async function DELETE({ request }) {
	console.log('delete');
	let con = await conFn();
	const form = await request.formData();

	const visits_id = form.get('visit_id');
	con.query('DELETE FROM clinic_visits WHERE visits_id = ?', [visits_id]);
	return {
		body: {
			visits_id: form.get('visit_id')
		}
	};
}
