const request = require('supertest');
const express = require('express');
const port = 3000;


describe('/api/listings', function() {
  it('submits successful get request', (done) => {
    request(`localhost:${port}`)
      .get(`/api/listings`)
      .expect(200, done);
  });
});
