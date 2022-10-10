/*
You will write unit test using Jest for your API.
You need to write 2 tests:
Write a test for your API that retrieves all your data.
Write a test for your API that returns the 1 collection (By ID).
*/

const { randomJokeService, randomJokeServiceByid } = require('./randomJokeService');


describe('randomJokeService', () => {
    test('should return a joke', async () => {
        const result = await randomJokeService();
        expect(result.data).toBeDefined();

    })
})

describe('randomJokeServiceByid', () => {
    test('should return a joke', async () => {
        const result = await randomJokeServiceByid(1);
        expect(result.data).toBeDefined();
    })
})



