import app from '../../index'
import supertest from 'supertest'

const request = supertest(app)

describe('/api/images route should', () => {
    it('respond with status 200', (done) => {
        request
            .get('/api/images?filename=fjord&width=200&height=200')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log(res)
                    throw err
                }
                return done()
            })
    })
})
