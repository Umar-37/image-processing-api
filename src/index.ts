import express, { NextFunction } from 'express'
import imageRoutes from './handlers/image'

const port = 3000
const app = express()

app.use(
      '/status',
      (req: express.Request, res: express.Response, next: NextFunction) => {
            res.status(200).end('<h1>ok</h1>')
            next()
      }
)

imageRoutes(app)

app.listen(port, () => {
      console.log('server is listening to the port ', port)
})

export default app
