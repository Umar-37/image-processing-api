import express, { Request, Response } from 'express'
import { routes } from './handlers/image'

export const app = express()

app.get('/status', (request: Request, response: Response) => {
      response.status(200).end('<h1>ok</h1>')
})
app.use('/api', routes)

app.listen(3000, () => {
      console.log('\n listening to http://localhost:' + 3000)
})
