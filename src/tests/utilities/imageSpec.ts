import { changeSize, getDstPath } from '../../utilities/image'
import fs from 'fs'

describe('image.resizeImage() should', () => {
      const img = { name: 'icelandwaterfall', width: 64, height: 120 }
      const { name, width, height } = img

      let dstPath = getDstPath(name, width, height)

      if (fs.existsSync(dstPath)) {
            fs.unlinkSync(dstPath)
      }

      it('if the image does not exist, then create it', async () => {
            expect(fs.existsSync(dstPath)).toBeFalsy()

            dstPath = await changeSize(name, width, height)

            expect(fs.existsSync(dstPath)).toBeTruthy()
      })
})
