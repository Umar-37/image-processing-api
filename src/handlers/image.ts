import express, { Request, Response } from 'express'
import { changeSize } from '../utilities/image'
export const routes = express()

async function imagesEnd(request: Request, response: Response) {
      try {
            const imgPath = await changeSize(
                  request.query.filename as unknown as string,
                  request.query.width as unknown as number,
                  request.query.height as unknown as number
            )

            response.sendFile(imgPath)
      } catch (error) {
            console.error('Error has occurred:', error)
            response.status(400).send('<span>error has occured</span>')
      }
}

routes.get('/images', imagesEnd)

//if the user access unhandled endpoint
routes.get('/*', (request: Request, response: Response): void => {
      response.status(404).send('please go to /api/images endpoint')
})
