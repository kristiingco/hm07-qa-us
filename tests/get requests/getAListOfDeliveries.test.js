// eslint-disable-next-line no-undef
const config = require('../../config');

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