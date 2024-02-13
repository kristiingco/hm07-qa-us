// eslint-disable-next-line no-undef
const config = require('../../config');

// Successful deletion of kit
test('Successfully deleting a kit should return a status code of 200', async () => {
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

test('Successfully deleting a kit should return a response with an "ok" property set to true', async () => {
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

// Deleting a kit when the provided id does not exist
test('Deleting a kit when the provided id does not exist should return a status code of 404', async () => {
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

test('Deleting a kit when the provided id does not exist should return a response that has a "message" property', async () => {
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
