// eslint-disable-next-line no-undef
const config = require('../../config');

// Successfully creating a user account
test('Successfully creating a user account code should return a status code of 201', async () => {
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

test('Response when successfully creating a user account should not be an empty object (aka should be truthy, having properties)', async () => {
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

test('Response when successfully creating a user account should have "authToken" as a property', async () => {
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
test('Creating a user account when firstName is not passed should return a status code of 400', async () => {
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

test('Response when creating a user account when firstName is not passed should have a "message" property with correct value', async () => {
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
test('Creating a user account when phone number is not passed returns a status code of 400', async () => {
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

test('Response when creating a user account when phone number is not passed should have a "message" property with correct valu', async () => {
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
test('Creating a user account when address is not passed returns a status code of 400', async () => {
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

test('Response when creating a user account when address is not passed should have a "message" property with correct value', async () => {
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
test('Creating a user account when username is invalid returns a status code of 400', async () => {
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

test('Response when creating a user account when username is invalid should have a "message" property with correct value', async () => {
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
test('Creating a user account when phone number is invalid returns a status code of 400', async () => {
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

test('Response when creating a user account when phone number is invalid should have a "message" property with correct value', async () => {
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
test('Creating a user account when address is invalid returns a status code of 400', async () => {
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

test('Response when creating a user account when address is invalid should have a "message" property with correct value', async () => {
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