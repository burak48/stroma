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

describe('GET /blogs', () => {
  it('responds with JSON containing a list of all blogs', async () => {
    const response = await request(baseURL).get('/blogs');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

let mockId = '';
describe('POST /blog', () => {
  it('responds with JSON containing the created blog', async () => {
    const newBlog = {
      title: 'Test Blog',
      author: 'John Doe',
      content: 'This is a test blog post.',
    };
    const response = await request(baseURL).post('/blog').send(newBlog);
    mockId = response.body.id;
    expect(response.status).toBe(200);
  });
});

describe('GET /blog/:id', () => {
  it('responds with JSON containing the specified blog', async () => {
    const blogId = '3f67b175-ef2d-4770-a9af-712702aa6ed5';
    const response = await request(baseURL).get(`/blog/${blogId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(blogId);
  });
});

describe('PUT /blog/:id', () => {
  it('responds with JSON containing the updated blog', async () => {
    const blogId = '3f67b175-ef2d-4770-a9af-712702aa6ed5';
    const updatedBlog = {
      title: 'Updated Blog',
      author: 'Jane Doe',
      content: 'This is an updated blog post.',
    };
    const response = await request(baseURL)
      .put(`/blog/${blogId}`)
      .send(updatedBlog);
    expect(response.status).toBe(200);
  });
});

describe('DELETE /blog/:id', () => {
  it('responds with status 200 and deletes the specified blog', async () => {
    const response = await request(baseURL).delete(`/blog/${mockId}`);
    expect(response.status).toBe(200);
    // verify that the blog was deleted
    const verifyResponse = await request(baseURL).get(`/blog/${mockId}`);
    expect(verifyResponse.status).toBe(404);
  });
});

describe('GET /', () => {
  test('should return 200 OK', async () => {
    const response = await request(baseURL).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('Hello, World!');
  });
});
