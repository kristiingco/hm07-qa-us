// eslint-disable-next-line no-undef
const config = require('../config');

// Checking availability of goods in the warehouse (successful)
test('status code should be 200', async () => {
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

test('response should not be empty (should be truthy)', async () => {
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

test('response should have the Everything You Need property', async () => {
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

test('response should have the Food City property', async () => {
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

test('response should have the Big World property', async () => {
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

test('response should have the Fresh Food property', async () => {
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

// Checking availability of goods in the warehouse (if no request body/empty request body is passed)
test('status code should be 400', async () => {
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

test('response should have a message property', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
		});
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("message");
});

//Check the quantity of goods in warehouse (successful)
test('status code should be 200', async () => {
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

test('response should not be empty (should be truthy)', async () => {
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

test('response should have the Everything You Need property', async () => {
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

test('response should have the Food City property', async () => {
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

test('response should have the Big World property', async () => {
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

test('response should have the Fresh Food property', async () => {
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

//Check the quantity of goods in warehouse (no id found) 
test('status code should be 404', async () => {
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

test('response should have a message as a property', async () => {
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

//Check the quantity of goods in warehouse (request body not found) 
test('status code should be 404', async () => {
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

test('response should have a message as a property', async () => {
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

//Creating a user account (successful)
test('status code should be 201', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(resultStatus).toBe(201);
});

test('response should not be an empty object (should be truthy)', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/users`, {
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

test('response should have authToken as a property', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(data).toHaveProperty("authToken");
});

//Creating a user account (firstName not passed)
test('status code should be 400', async () => {
	const requestBody = {
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(resultStatus).toBe(400);
});

test('message with correct value should be in response', async () => {
	const requestBody = {
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(data).toHaveProperty("message", "Not all required parameters have been passed");
});

//Creating a user account (phone not passed)
test('status code should be 400', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(resultStatus).toBe(400);
});

test('message with correct value should be in response', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(data).toHaveProperty("message", "Not all required parameters have been passed");
});

//Creating a user account (address not passed)
test('status code should be 400', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping"
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(resultStatus).toBe(400);
});

test('message with correct value should be in response', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping"
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(data).toHaveProperty("message", "Not all required parameters have been passed");
});

//Creating a user account (invalid username)
test('status code should be 400', async () => {
	const requestBody = {
		"firstName": "M",
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(resultStatus).toBe(400);
});

test('message with correct value should be in response', async () => {
	const requestBody = {
		"firstName": "M",
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(data).toHaveProperty("message", "You have entered an invalid username. The name can contain only Latin letters, the length should be 2-15 characters.");
});

//Creating a user account (invalid phone number)
test('status code should be 400', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"phone": "hello",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(resultStatus).toBe(400);
});

test('message with correct value should be in response', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"phone": "hello",
		"comment": "The baby is sleeping",
		"address": "8042 Lancaster Ave.Hamburg, NY"
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(data).toHaveProperty("message", "You have entered an invalid user's phone number. The phone number can only contain numbers and a + sign");
});

//Creating a user account (invalid address)
test('status code should be 400', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping",
		"address": "8"
	}
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(resultStatus).toBe(400);
});

test('message with correct value should be in response', async () => {
	const requestBody = {
		"firstName": "Max",
		"email": "max@example.com",
		"phone": "+10005553535",
		"comment": "The baby is sleeping",
		"address": "8"
	}
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/users`, {
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
	expect(data).toHaveProperty("message", "You have entered an invalid address. The address can contain only Latin characters and punctuation marks, the address length should be 5-50 characters");
});

//Adding items to the kit (successful) 
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

//Adding items to the kit (kit not found) 
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