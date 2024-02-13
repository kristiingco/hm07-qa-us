// eslint-disable-next-line no-undef
const config = require('../../config');

test('Getting a list of warehouses should result in a status code of 200', async () => {
	let resultStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(200);
});

test('Getting a list of warehouses should result in an array with a length greater than 0', async () => {
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

test('Getting a list of warehouses should not result to null', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).not.toBeNull(); 
}); 