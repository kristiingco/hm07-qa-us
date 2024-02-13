// eslint-disable-next-line no-undef
const config = require('../../config');

// Successfully creating a user account
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

// Creating a user account when firstName is not passed
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

// Creating a user account when phone number is not passed
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

// Creating a user account when address is not passed
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

// Creating a user account when username is invalid
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

// Creating a user account when phone number is invalid
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

// Creating a user account when address is invalid
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