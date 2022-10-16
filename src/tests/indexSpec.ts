import app from '../index'
import supertest from 'supertest'

const request = supertest(app)

describe('/status route should', () => {
    it('respond with status 200', async () => {
        const response = await request.get('/status')
        expect(response.status).toBe(200)
    })
})
