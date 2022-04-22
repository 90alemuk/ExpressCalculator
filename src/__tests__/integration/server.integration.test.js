import server from '../../server.js'
import request from 'supertest'

describe('server integration test', () => {

  it('responds with 3 on path /calculator/1/add/2', (done) => {
    request(server)
      .get('/calculator/1/add/2')
      .expect('Content-Type', /json/)
      .expect((res) => {
        res.body.result = parseInt(res.body.result)
      })
      .expect(200, {
        result: 3
      }, done);
  });
  
});

