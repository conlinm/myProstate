/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function GET({ params }) {
	let con = await conFn();

	const labs = await con
		.query(
			`SELECT  lab_id, user_id, Date_Format(lab_date,"%Y-%m-%d") as lab_date, lab_name, lab_value, notes
	FROM labs ORDER BY lab_date DESC;`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (labs) {
		return {
			status: 200,
			body: { labs }
		};
	}
}

export async function POST({ request }) {
	let con = await conFn();
	const form = await request.formData();
	const lab_date = form.get('date');
	const lab_name = form.get('lab_name');
    const lab_value = form.get('lab_value');
    const notes = form.get('notes');
	con.query(
		'INSERT INTO labs (user_id, lab_date, lab_name, lab_value, notes) VALUES (?, ?)',
		['1', lab_date, lab_name, lab_value, notes]
	);
	return {
		body: {
			user_id: '1',
			lab_date: form.get('date'),
            lab_name: form.get('lab_name'),
            lab_value: form.get('lab_value'),
			notes: form.get('notes')
		}
	};
}

export async function PUT({ request }) {
	console.log('put');
	let con = await conFn();
	const form = await request.formData();
    const lab_date = form.get('date');
    const lab_id = form.get('lab_id');
	const lab_name = form.get('lab_name');
    const lab_value = form.get('lab_value');
    const notes = form.get('notes');
	con.query('UPDATE labs SET lab_date = ?, lab_name = ?, lab_value = ?, notes = ? WHERE lab_id = ?', [
		lab_date,
        lab_name,
        lab_value,
		notes,
		lab_id
	]);
	return {
		body: {
			lab_date: form.get('date'),
            lab_name: form.get('lab_name'),
            lab_value: form.get('lab_value'),
			notes: form.get('notes'),
			lab_id: form.get('lab_id')
		}
	};
}

export async function DELETE({ request }) {
	console.log('delete');
	let con = await conFn();
	const form = await request.formData();
	const lab_id = form.get('lab_id');
	con.query('DELETE FROM labs WHERE lab_id = ?', [lab_id]);
	return {
		body: {
			lab_id: form.get('lab_id')
		}
	};
}
