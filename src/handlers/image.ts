import express, { Request, Response } from 'express'
import { resizeImage } from '../utilities/image'

async function imagesEnd(req: Request, res: Response) {
    try {
        const imgDst = await resizeImage(
             req.query.filename as string,
            req.query.width as string,
            req.query.height as string
        )

        res.sendFile(imgDst)
    } catch (error) {
        console.log('Error has occurred:',error)
        res.status(400).json(error)
    }
}

async function imageRoutes(app: express.Application) {
    app.get('/api/images', imagesEnd)
}

export default imageRoutes
