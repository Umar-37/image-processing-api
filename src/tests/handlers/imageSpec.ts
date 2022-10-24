import app from '../../index'
import supertest from 'supertest'

const request = supertest(app)

describe('the route /api/images should', () => {
      it('the respond status should be 200', (done) => {
            request
                  .get('/api/images?filename=fjord&width=200&height=200')
                  .expect(200)
                  .end((error, resolve) => {
                        if (error) {
                              console.log(resolve)
                              throw error
                        }
                        return done()
                  })
      })
})
