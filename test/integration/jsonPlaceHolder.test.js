const request = require('supertest');
const { expect } = require('chai');

const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API Integration Tests', function() {
  it('should fetch a list of posts', async function() {
    const response = await request(baseUrl)
      .get('/posts')
      .expect(200);    
    expect(response.body).to.be.an('array');
    const firstPost = response.body[0];
    expect(firstPost).to.have.property('userId');
    expect(firstPost).to.have.property('id');
    expect(firstPost).to.have.property('title');
    expect(firstPost).to.have.property('body');
  });

  it('should fetch a single post by ID', async function() {
    const response = await request(baseUrl)
      .get('/posts/1')
      .expect(200);
    const responseBody = response.body;
    expect(responseBody).to.have.property('userId');
    expect(responseBody).to.have.property('id', 1);
    expect(responseBody).to.have.property('title');
    expect(responseBody).to.have.property('body');
  });

  it('should create a new post (mocked response)', async function() {
    const newPost = {
      userId: 1,
      title: 'foo',
      body: 'bar'
    };

    const response = await request(baseUrl)
      .post('/posts')
      .send(newPost)
      .expect(201);
    const responseBody = response.body;
    expect(responseBody).to.have.property('userId', 1);
    expect(responseBody).to.have.property('title', 'foo');
    expect(responseBody).to.have.property('body', 'bar');
  });

  it('should update a post by ID (mocked response)', async function() {
    const updatedPost = {
      userId: 1,
      title: 'foo updated',
      body: 'bar updated'
    };

    const response = await request(baseUrl)
      .put('/posts/1')
      .send(updatedPost)
      .expect(200);
    const responseBody = response.body;
    expect(responseBody).to.have.property('userId', 1);
    expect(responseBody).to.have.property('id', 1);
    expect(responseBody).to.have.property('title', 'foo updated');
    expect(responseBody).to.have.property('body', 'bar updated');
  });

  it('should fetch a list of users', async function() {
    const response = await request(baseUrl)
      .get('/users')
      .expect(200);
    
    expect(response.body).to.be.an('array');
    const firstPost = response.body[0];
    expect(firstPost).to.have.property('id');
    expect(firstPost).to.have.property('name');
    expect(firstPost).to.have.property('username');
    expect(firstPost).to.have.property('email');
  });

  it('should fetch a single user by ID', async function() {
    const response = await request(baseUrl)
      .get('/users/1')
      .expect(200);
    const responseBody = response.body;
    expect(responseBody).to.have.property('id', 1);
    expect(responseBody).to.have.property('name');
    expect(responseBody).to.have.property('username');
    expect(responseBody).to.have.property('email');
  });
});
