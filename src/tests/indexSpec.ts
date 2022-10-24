import app from '../index'
import supertest from 'supertest'

const req = supertest(app)

describe('/status route should', () => {
      it('respond with status 200', async () => {
            const response = await req.get('/status')
            expect(response.status).toBe(200)
      })
})

describe('/* any undfind route should return 404', () => {
      it('respond with status 404', async () => {
            const response = await req.get('/*')
            expect(response.status).toBe(404)
      })
})
