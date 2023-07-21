const { expect } = require('chai');
const app = require('supertest')(require('../app'));

describe('baseline test', () => {
  it('should be a passing test', () => {
    expect(true).to.equal(true);
  });
});

describe('GET /', () => {
  let res;
  beforeEach(async () => {
    res = await app.get('/');
  });
  it('should return 200 OK', () => {
    console.log(res);
    expect(res.status).to.equal(200);
  });
  it('should return json', () => {
    expect(res._body.test).to.equal('working');
  });
});
