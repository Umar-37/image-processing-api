import { resizeImage, getDstPath } from '../../utilities/image'
import fs from 'fs'

describe('image.resizeImage() should', () => {
    const imgName = 'fjord'
    const width = '64'
    const height = '64'

    let dstPath = getDstPath(imgName, +width, +height)

    if (fs.existsSync(dstPath)) {
        fs.unlinkSync(dstPath)
    }

    it('create resized image file if not already exist', async () => {
        expect(fs.existsSync(dstPath)).toBeFalsy()

        dstPath = await resizeImage(imgName, width, height)

        expect(fs.existsSync(dstPath)).toBeTruthy()
    })
})
