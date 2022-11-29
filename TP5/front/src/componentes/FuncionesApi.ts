import Instrumento from "./Instrumento";

export async function getInstrumentosJSONFetch() {
	let urlServer = "http://localhost:3001/api/instrumentos/";
	let response = await fetch(urlServer, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: 'cors'
	});
	console.log(response);
	return await response.json();
}

export async function getInstrumentosPorIdFetch(id: number) {
	let urlServer = 'http://localhost:3001/api/instrumentos/' + id;
	let response = await fetch(urlServer, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: 'cors'
	});
	console.log(response);
	return await response.json() as Instrumento;
}