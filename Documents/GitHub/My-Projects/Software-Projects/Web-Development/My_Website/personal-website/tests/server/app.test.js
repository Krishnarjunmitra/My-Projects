const request = require('supertest');
const app = require('../src/app');

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', email: 'test@example.com', password: 'password' });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User registered successfully');
  });

  it('should login an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('User logged in successfully');
  });

  it('should get user details', async () => {
    const response = await request(app).get('/api/auth/user/1234567890'); // Replace with a valid user ID

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('username');
    expect(response.body).toHaveProperty('email');
  });
});

describe('Project Routes', () => {
  it('should create a new project', async () => {
    const response = await request(app)
      .post('/api/projects')
      .send({ name: 'Test Project', description: 'A test project', imageUrl: 'https://example.com/image.jpg', link: 'https://example.com/project' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'Test Project');
  });

  it('should get all projects', async () => {
    const response = await request(app).get('/api/projects');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should get a specific project', async () => {
    const response = await request(app).get('/api/projects/1234567890'); // Replace with a valid project ID

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('description');
  });

  it('should update a project', async () => {
    const response = await request(app)
      .put('/api/projects/1234567890') // Replace with a valid project ID
      .send({ name: 'Updated Project' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', 'Updated Project');
  });

  it('should delete a project', async () => {
    const response = await request(app).delete('/api/projects/1234567890'); // Replace with a valid project ID

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Project deleted successfully');
  });
});