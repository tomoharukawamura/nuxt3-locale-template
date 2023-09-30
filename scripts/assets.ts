import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const readLocaleAssets = (dirPath: string) => {
  let jaData = new Object()
  let enData =  new Object()
  fs.readdir(dirPath, (err, dirs) => {
    if(err) {
      console.log(err)
      return
    }

    let keyErrors: string[] = []
    dirs.forEach(d => {
      if(d.match(/(.ts|.js|.json)/)) return
      
      const enTmp = JSON.parse(fs.readFileSync(path.resolve(fileURLToPath(import.meta.url),`../../src/assets/locale/${d}/en.json`),'utf-8'))
      enData[d as keyof typeof enData] = enTmp 
      let enKeys = Object.keys(enTmp)

      const jaTmp = JSON.parse(fs.readFileSync(path.resolve(fileURLToPath(import.meta.url), `../../src/assets/locale/${d}/ja.json`),'utf-8'))
      jaData[d as keyof typeof enData] = jaTmp
      let jaKeys = Object.keys(jaTmp)
      

      let idx = 0
      let enKeyLen = enKeys.length
      while(idx < enKeyLen){
        const val = enKeys[idx]
        if(jaKeys.includes(val)){
          //キーが一致したら消していく
          enKeys.splice(idx, 1)
          const jaIdx = jaKeys.indexOf(val)
          jaKeys.splice(jaIdx, 1)
        } else {
          idx++
        }
        enKeyLen = enKeys.length
      }
      if(jaKeys.length || enKeys.length){
        const dirName = `ディレクトリ:${d}\n`
        const jaShortKeys = jaKeys.length? jaKeys.join(','): ''
        const jaKeyShortMessage = jaShortKeys? `キー${jaShortKeys}がen.jsonに存在しません。`: ''

        const enShortKeys = enKeys.length? enKeys.join(','): ''
        const enKeyShortMessage = enShortKeys? `キー${enShortKeys}がja.jsonに存在しません。`: ''

        const errMessage = dirName + jaKeyShortMessage + enKeyShortMessage
        keyErrors.push(errMessage)
      }
    })

    if(keyErrors.length){
      const msg = keyErrors.join('\n')
      throw new Error(msg)
    }

    const allLocaleData = {
      ja: jaData,
      en: enData
    }
  
    const writeDir = path.resolve(fileURLToPath(import.meta.url), '../../src/assets/locale/index.json')
    const writeData = JSON.stringify(allLocaleData)
    const f = fs.openSync(writeDir, 'w')
    fs.writeFileSync(f, writeData)
  })
}

const dirname = fileURLToPath(import.meta.url);
readLocaleAssets(path.resolve(dirname, '../../src/assets/locale'))