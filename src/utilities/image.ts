import fs from 'fs'
import sharp from 'sharp'
import path from 'path'

// get the full path to the orginal imgs dir
const orginalImgsDir: string = path.join(
      __dirname,
      '../../assets/full'
) as string

// get the full path to the cached imgs
const cacheImg: string = path.join(
      __dirname,
      '../../assets/cacheImges'
) as string
console.log('the path for orginal imges:', orginalImgsDir)
console.log('cashe imges:', cacheImg)

export function getDstPath(
      imgName: string,
      width: number,
      height: number
): string {
      return path.join(cacheImg, `${imgName}.width${width}.height${height}.jpg`)
}
//change this function name
export async function resizeImage(
      imgName: string,
      width: number,
      height: number
): Promise<string> {
      // check valid width and height
      if (checkNan(height) || checkNan(width)) {
            throw 'invalid width or height'
      }

      const imgPath: string = path.join(
            orginalImgsDir,
            imgName + '.jpg'
      ) as string
      const cachedImgPath: string = getDstPath(imgName, width, height) as string

      // if img does not exist
      if (!fs.existsSync(imgPath)) {
            throw 'img does not exist'
      }

      // check if img already exist
      if (!fs.existsSync(cachedImgPath)) {
            //if img does not exist in the file system,resize it and save it
            const img = await sharp(imgPath)
                  .resize({
                        width: parseInt(width.toString()),
                        height: parseInt(height.toString()),
                  })
                  .jpeg({ mozjpeg: true })
                  .toFile(cachedImgPath)
            console.log(
                  'img has been resized and saved on the disk with width=' +
                        img.width,
                  'and height=' + img.height
            )
            return cachedImgPath
      } else {
            console.log('Pull from disk on subsequent access attempts.')
            return cachedImgPath
      }
}

const checkNan = (num: number): boolean => isNaN(num) || num <= 0 || num <= 0
