// eslint-disable-next-line no-undef
const config = require('../../config');

// Successfully receive set 
test('status should be 200', async () => {
	let resultStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(200);
});

test('result of finding kit should be truthy (aka response object should have properties)', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toBeTruthy();
});

test('result of finding kit should not be null', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).not.toBeNull();
});

test('response should include id property', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("id");
});

test('response should include name property', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("name");
});

test('response should include productsList property', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("productsList");
});

test('response should include productsCount property', async () => {
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
test('status should be 404', async () => {
	let resultStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Japanese%20Treats`);
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(404);
});

test('error response should have a message property', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Japanese%20Treats`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("message", "Not Found");
});
