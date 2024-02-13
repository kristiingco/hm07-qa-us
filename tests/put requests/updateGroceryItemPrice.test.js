// eslint-disable-next-line no-undef
const config = require('../../config');

// Successfully changing grocery item price
test('Successfully changing grocery item price should return a status code of 200', async () => {
	const requestBody = {
		"price": 175
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(200);
});

test('Response when successfully changing grocery item price should have an "ok" property with value set to true', async () => {
	const requestBody = {
		"price": 175
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/products/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("ok", true);
});

// Attempting to change item price when product is not found
test('Attempting to change item price when product is not found should return a status code of 404', async () => {
	const requestBody = {
		"price": 175
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/310`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(404);
});

test('Response when attempting to change item price when product is not found should have a "message" property', async () => {
	const requestBody = {
		"price": 175
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/products/310`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("message", "Not Found");
});