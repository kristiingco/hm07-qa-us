// eslint-disable-next-line no-undef
const config = require('../../config');

// Succesfully adding items to the kit 
test('Succesfully adding items to the kit should return a status code of 200', async () => {
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

test('Successfully adding items to the kit should not result in an empty object (aka response object be truthy, containing properties)', async () => {
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

test('Response when successfully adding items to the kit should have the "id" property', async () => {
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

test('Response when successfully adding items to the kit should have the "name" property', async () => {
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

test('Response when successfully adding items to the kit should have the "productsList" property', async () => {
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

test('Response when successfully adding items to the kit should have the "productsCount" property', async () => {
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
test('Adding items to the kit when kit with provided id does not exist should return a status code of 404', async () => {
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

test('Response when adding items to the kit when kit with provided id does not exist should have the "message" property', async () => {
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