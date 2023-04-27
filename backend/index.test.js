const request = require('supertest');
const baseURL = 'http://localhost:3001';

describe('POST /login', () => {
  test('should return 200 OK with valid email and password', async () => {
    const response = await request(baseURL)
      .post('/login')
      .send({ email: 'test@test.com', password: '123' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Login successful!' });
  });

  test('should return 400 Bad Request with invalid email or password', async () => {
    const response = await request(baseURL)
      .post('/login')
      .send({ email: 'invalid@test.com', password: 'invalid' });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid email or password' });
  });
});

describe('GET /', () => {
  test('should return 200 OK', async () => {
    const response = await request(baseURL).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('Hello, World!');
  });
});
