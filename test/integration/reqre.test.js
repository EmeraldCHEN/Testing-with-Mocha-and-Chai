const supertest = require('supertest');
const { expect } = require('chai');
const config = require('../../config');
const baseUrl = config.baseUrl;
const request = supertest(baseUrl);

describe('ReqRes API Tests', function() {

  describe('GET /users', function() {
    it('should retrieve a list of users', function(done) {
      request.get('/users')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('page').that.is.a('number');
          expect(res.body).to.have.property('per_page').that.is.a('number');
          expect(res.body).to.have.property('total').that.is.a('number');
          expect(res.body).to.have.property('total_pages').that.is.a('number');
          expect(res.body).to.have.property('data').that.is.an('array');
          done();
        });
    });

    it('should retrieve a list of users with a specific page', function(done) {
      request.get('/users?page=2')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.page).to.equal(2);
          done();
        });
    });
  });

  describe('GET /users/:id', function() {
    it('should retrieve a user by ID', function(done) {
      request.get('/users/2')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.data).to.have.property('id').that.equals(2);
          expect(res.body.data).to.have.property('email').that.equals('janet.weaver@reqres.in');
          done();
        });
    });

    it('should return 404 for a user that does not exist', function(done) {
      request.get('/users/23')
        .expect(404)
        .end(done);
    });
  });

  describe('POST /users', function() {
    it('should create a new user', function(done) {
      request.post('/users')
        .send({
          name: 'John Doe',
          job: 'Software Engineer'
        })
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('name').that.equals('John Doe');
          expect(res.body).to.have.property('job').that.equals('Software Engineer');
          done();
        });
    });
  });

  describe('PUT /users/:id', function() {
    it('should update an existing user', function(done) {
      request.put('/users/2')
        .send({
          name: 'Jane Doe',
          job: 'Product Manager'
        })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('name').that.equals('Jane Doe');
          expect(res.body).to.have.property('job').that.equals('Product Manager');
          done();
        });
    });
  });

  describe('DELETE /users/:id', function() {
    it('should delete a user', function(done) {
      request.delete('/users/2')
        .expect(204) // No Content
        .end(done);
    });
  });
});
