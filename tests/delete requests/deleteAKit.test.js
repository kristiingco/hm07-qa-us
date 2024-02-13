// eslint-disable-next-line no-undef
const config = require('../../config');

// Successful deletion of kit
test('status should be 200', async () => {
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(200);
});

test('response should have an ok property set to true', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("ok", true);
});

// Deleting a kit when the id of kit does not exist
test('status should be 404', async () => {
	let resultStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/60`, {
			method: 'DELETE',
		});
		resultStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(resultStatus).toBe(404);
});

test('response should have a message property', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/60`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data).toHaveProperty("message");
});
