// eslint-disable-next-line no-undef
const config = require('../config');

// Get a list of warehouses
test('status should be 200', async () => {
	let resultStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(200);
});

test('list of warehouses returned should be greater than 0', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	const warehouseCount = data.length;
	expect(warehouseCount).toBeGreaterThan(0); 
});

test('list of warehouses should not be null', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).not.toBeNull(); 
}); 

// Get a list of deliveries 
test('status should be 200', async () => {
	let resultStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(200);
});

test('list of deliveries returned should be greater than 0', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	const deliveryCount = data.length;
	expect(deliveryCount).toBeGreaterThan(0); 
});

test('list of deliveries should not be null', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).not.toBeNull(); 
}); 

// Getting a kit by name (successfully receive set) 
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

// Getting a kit by name (not found)  
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
	expect(data).toHaveProperty("message");
});
