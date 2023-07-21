const { expect } = require('chai');
const app = require('supertest')(require('../app'));
const { syncAndSeed } = require('../db');

describe('baseline test', () => {
  it('should be a passing test', () => {
    expect(true).to.equal(true);
  });
});

describe('api', () => {
  before(async () => {
    await syncAndSeed();
  });

  describe('GET /', () => {
    let res;
    beforeEach(async () => {
      res = await app.get('/');
    });
    it('should return 200 OK', () => {
      expect(res.status).to.equal(200);
    });
    it('should return json', () => {
      expect(res._body.test).to.equal('working');
    });
  });

  describe('GET /api/movies', () => {
    let res;
    before(async () => {
      res = await app.get('/api/movies');
    });
    it('should return 200 OK', () => {
      expect(res.status).to.equal(200);
    });
    it('should return all movies', async () => {
      expect(res._body.length).to.equal(4);
    });
  });
});
