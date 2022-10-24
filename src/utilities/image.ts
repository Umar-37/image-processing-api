import fs from 'fs'
import sharp from 'sharp'
import path from 'path'

// get the full path to the imgs dir
const fullDir = path.resolve(__dirname, '../../assets/full')

// get the full path to the cached imgs
const thumbDir = path.resolve(__dirname, '../../assets/cacheImges')
console.log('the path for orginal imges:', fullDir)
console.log('cashe imges:', thumbDir)

export function getDstPath(
      imgName: string,
      width: number,
      height: number
): string {
      return path.resolve(
            thumbDir,
            `${imgName}.width${width}.height${height}.jpg`
      )
}

export async function resizeImage(
      imgName: string,
      width: number,
      height: number
): Promise<string> {
      // check valid width and height
      if (isNaN(+width) || isNaN(+height) || +width <= 0 || +height <= 0) {
            const err = new Error()
            err.message = `'height' and 'width' parameters should be provided as positive integers.`
            err.name = 'InvalidHeightWidthError'
            throw err
      }

      const srcPath = path.resolve(fullDir, imgName + '.jpg')
      const dstPath = getDstPath(imgName, +width, +height)

      // check valid filename
      if (!fs.existsSync(srcPath)) {
            const err = new Error()
            err.message = `'filename' parameter should be provided as 'encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', or 'santamonica.'`
            err.name = 'InvalidFileNameError'
            throw err
      }

      // check if already exist
      if (!fs.existsSync(dstPath)) {
            console.log('Resize an image and save it to disk on first access.')
            await sharp(srcPath)
                  .resize(+width, +height)
                  .toFile(dstPath)
            return dstPath
      } else {
            console.log('Pull from disk on subsequent access attempts.')
            return dstPath
      }
}
