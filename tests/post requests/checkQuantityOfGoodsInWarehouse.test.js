// eslint-disable-next-line no-undef
const config = require('../../config');

// Successfully checking the quantity of goods in warehouse 
test('Successfully checking the quantity of goods in warehouse should return a status code of 200', async () => {
	const requestBody = {
		"ids": [
			1,
			4,
			44
		]
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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

test('Response when successfully checking the quantity of goods in warehouse should not be empty (aka should be truthy, having properties)', async () => {
	const requestBody = {
		"ids": [
			1,
			4,
			44
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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

test('Response when successfully checking the quantity of goods in warehouse should have the "Everything You Need" property', async () => {
	const requestBody = {
		"ids": [
			1,
			4,
			44
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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

test('Response when successfully checking the quantity of goods in warehouse should have the "Food City" property', async () => {
	const requestBody = {
		"ids": [
			1,
			4,
			44
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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

test('Response when successfully checking the quantity of goods in warehouse should have the "Big World" property', async () => {
	const requestBody = {
		"ids": [
			1,
			4,
			44
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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

test('Response when successfully checking the quantity of goods in warehouse should have the "Fresh Food" property', async () => {
	const requestBody = {
		"ids": [
			1,
			4,
			44
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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

// Checking the quantity of goods in warehouse when product id does not exist 
test('Checking the quantity of goods in warehouse when product id does not exist should return a status code of 404', async () => {
	const requestBody = {
		"ids": [
			220
		]
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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

test('Response when checking the quantity of goods in warehouse when product id does not exist should have "message" as a property', async () => {
	const requestBody = {
		"ids": [
			220
		]
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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
	expect(data).toHaveProperty("message");
});

// Checking the quantity of goods in warehouse if request body is not passed 
test('Checking the quantity of goods in warehouse if request body is not passed should return a status code of 404', async () => {
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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

test('Response when checking the quantity of goods in warehouse if request body is not passed should have "message" as a property', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
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