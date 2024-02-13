// eslint-disable-next-line no-undef
const config = require('../../config');

// Successfully updating kit
test('Successfully updating kit should return a status code of 200', async () => {
	const requestBody = {
		"name": "My modified kit",
		"productsList": [
			{
				"id": 1,
				"quantity": 4
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 1
			}
		]
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
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

test('Response when successfully updating kit should have an "ok" property with value set to true', async () => {
	const requestBody = {
		"name": "My modified kit",
		"productsList": [
			{
				"id": 1,
				"quantity": 4
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 1
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
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

// Attempting to update kit when kit id is not found
test('Attempting to update kit when kit id is not found should return a status code of 404', async () => {
	const requestBody = {
		"name": "My modified kit",
		"productsList": [
			{
				"id": 1,
				"quantity": 4
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 1
			}
		]
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/52`, {
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

test('Response when attempting to update kit when kit id is not found should have a "message" property', async () => {
	const requestBody = {
		"name": "My modified kit",
		"productsList": [
			{
				"id": 1,
				"quantity": 4
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 1
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/52`, {
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