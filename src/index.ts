import express from 'express'
import imageRoutes from './handlers/image'

const app = express()
const port = 3000

imageRoutes(app)

app.get('/status', (req: express.Request, res: express.Response) => {
    res.status(200).send('')
})

app.listen(port, () => {
    console.log('server is listening to port ', port)
})

export default app
