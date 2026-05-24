import { readFileSync } from 'fs';
import { join } from 'path';

export async function load() {
	try {
		const photoBase64 = readFileSync(
			join(process.cwd(), 'static/nicolobase64.jpeg'),
			'utf-8'
		).trim();

		return {
			photoBase64
		};
	} catch (error) {
		console.error('Errore nella lettura del file base64:', error);
		return {
			photoBase64: ''
		};
	}
}
