// eslint-disable-next-line no-undef
const config = require('../../config');

test('Getting a list of deliveries should return a status code of 200', async () => {
	let resultStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(200);
});

test('Getting a list of deliveries should return an array with a length greater than 0', async () => {
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

test('Getting a list of deliveries should not result to null', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).not.toBeNull(); 
}); 