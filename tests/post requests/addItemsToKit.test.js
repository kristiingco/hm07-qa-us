// eslint-disable-next-line no-undef
const config = require('../../config');

// Succesfully adding items to the kit 
test('status code should be 200', async () => {
	const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 6,
				"quantity": 2
			}
		]
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
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

test('response should not be empty (should be truthy)', async () => {
	const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 6,
				"quantity": 2
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
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

test('response should have the id property', async () => {
	const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 6,
				"quantity": 2
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
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
	expect(data).toHaveProperty("id");
});

test('response should have the name property', async () => {
	const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 6,
				"quantity": 2
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
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
	expect(data).toHaveProperty("name");
});

test('response should have the productsList property', async () => {
	const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 6,
				"quantity": 2
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
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
	expect(data).toHaveProperty("productsList");
});

test('response should have the productsCount property', async () => {
	const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 6,
				"quantity": 2
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
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
	expect(data).toHaveProperty("productsCount");
});

// Adding items to the kit when kit does not exist 
test('status code should be 404', async () => {
	const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 6,
				"quantity": 2
			}
		]
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/10/products`, {
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
	expect(resultStatus).toBe(404);
});

test('response should have the message property', async () => {
	const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 6,
				"quantity": 2
			}
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/10/products`, {
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
	expect(data).toHaveProperty("message", "Not Found");
});