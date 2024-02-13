// eslint-disable-next-line no-undef
const config = require('../../config');

// Successfully checking availability of goods in the warehouse 
test('Successfully checking availability of goods in the warehouse returns a status code of 200', async () => {
	const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
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

test('Successfully checking availability of goods in the warehouse should have a response that is not empty (aka should be truthy, having properties)', async () => {
	const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json(); 
	expect(data).toBeTruthy();
});

test('Response when successfully checking availability of goods in the warehouse should have the "Everything You Need" property', async () => {
	const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json(); 
	expect(data).toHaveProperty("Everything You Need");
});

test('Response when successfully checking availability of goods in the warehouse should have the "Food City" property', async () => {
	const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json(); 
	expect(data).toHaveProperty("Food City");
});

test('Response when successfully checking availability of goods in the warehouse should have the "Big World" property', async () => {
	const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json(); 
	expect(data).toHaveProperty("Big World");
});

test('Response when successfully checking availability of goods in the warehouse should have the "Fresh Food" property', async () => {
	const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json(); 
	expect(data).toHaveProperty("Fresh Food");
});

// Checking availability of goods in the warehouse if no request body/empty request body is passed
test('Checking availability of goods in the warehouse if no request body/empty request body is passed should return a status code of 400', async () => {
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
		});
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(400);
});

test('Response when checking availability of goods in the warehouse if no request body/empty request body is passed should have a "message" property', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("message");
});
