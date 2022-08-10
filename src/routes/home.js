import { conFn } from '../mysql.js';

export async function GET({ params }) {
	let con = await conFn();

	const events = await con.query('CALL get_timline').then(function ([rows, fields]) {
		return rows;
	});
	if (events) {
		return {
			status: 200,
			body: { events }
		};
	}
}
