// eslint-disable-next-line no-undef
const config = require('../../config');

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