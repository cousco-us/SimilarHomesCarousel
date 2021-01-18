const request = require('supertest');

const server = require('../server/index.js');

request(server)
  .get('/api/listings')
  .expect(200)
  .end((err, res) => {
    if (err) throw err;
  });
