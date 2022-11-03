import { app } from '../../index'
import supertest from 'supertest'

const request = supertest(app)
//to genrate random imgs sizes
const imgs = [
      'fjord',
      'icelandwaterfall',
      'palmtunnel',
      'encenadaport',
      'santamonica',
]
const heightWidth = () => Math.floor(Math.random() * 1000)
const pickImg = () => Math.floor(Math.random() * 5)

describe('the route /api/images must', () => {
      it('the respond status must be 200', (done) => {
            request
                  .get(
                        `/api/images?filename=${
                              imgs[pickImg()]
                        }&width=${heightWidth()}&height=${heightWidth()}`
                  )
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
