import express from 'express'
import { routes } from './handlers/image'

const port = 3000
const app = express()

app.get('/status', (request: express.Request, response: express.Response) => {
      response.status(200).end('<h1>ok</h1>')
})
app.use('/api', routes)

app.use('/', routes)

app.listen(port, () => {
      console.log('\n server is listening to http://localhost:' + port)
})

export default app
