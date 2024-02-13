// eslint-disable-next-line no-undef
const config = require('../../config');

// Successfully receive a kit 
test('Successfully fetching a kit should return a status code of 200', async () => {
	let resultStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(200);
});

test('Successfully fetching a kit should return a truthy object (aka response object should have properties)', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toBeTruthy();
});

test('Successfully fetching a kit should not return null', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).not.toBeNull();
});

test('Response of fetching a kit should include "id" property', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("id");
});

test('Response of fetching a kit should include "name" property', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("name");
});

test('Response of fetching a kit should include "productsList" property', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("productsList");
});

test('Response of fetching a kit should include "productsCount" property', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("productsCount");
});

// Kit name not found 
test('Not finding a kit with the provided name should return a status code of 404', async () => {
	let resultStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Japanese%20Treats`);
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(404);
});

test('Not finding a kit with the provided name should return an error response with a "message" property', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Japanese%20Treats`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("message", "Not Found");
});
