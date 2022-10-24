import fs from 'fs'
import sharp from 'sharp'
import path from 'path'

// get the full path to the imgs dir
const fullDir: string = path.resolve(__dirname, '../../assets/full') as string

// get the full path to the cached imgs
const thumbDir: string = path.resolve(
      __dirname,
      '../../assets/cacheImges'
) as string
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
      if (checkNan(height) || checkNan(width)) {
            throw 'invalid width or height'
      }

      const srcPath: string = path.resolve(fullDir, imgName + '.jpg') as string
      const dstPath: string = getDstPath(imgName, width, height) as string

      // if img does not exist
      if (!fs.existsSync(srcPath)) {
            throw 'not correct file name'
      }

      // check if img already exist
      if (!fs.existsSync(dstPath)) {
            //if img does not exist in the file system,resize it and save it
            const img = await sharp(srcPath)
                  .resize(+width as number, +height as number)
                  .toFile(dstPath)
            console.log(
                  'img has been resized and saved on the disk with width=' +
                        img.width,
                  'and height=' + img.height
            )
            return dstPath
      } else {
            console.log('Pull from disk on subsequent access attempts.')
            return dstPath
      }
}

const checkNan = (num: number): boolean => isNaN(num) || num <= 0 || num <= 0
