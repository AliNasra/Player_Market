// Example test
const request = require('supertest');
const app = require('../src/app');

describe('Player API', () => {
  it('should get all players', async () => {
    const res = await request(app).get('/api/players');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});