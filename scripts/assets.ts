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

    dirs.forEach(d => {
      if(d.match(/(.ts|.js|.json)/)) return
      const enTmp = JSON.parse(fs.readFileSync(path.resolve(fileURLToPath(import.meta.url),`../../src/assets/locale/${d}/en.json`),'utf-8'))
      console.log(enTmp)
      enData[d as keyof typeof enData] = enTmp 

      const jaTmp = JSON.parse(fs.readFileSync(path.resolve(fileURLToPath(import.meta.url), `../../src/assets/locale/${d}/ja.json`),'utf-8'))
      console.log(jaTmp)
      jaData[d as keyof typeof enData] = jaTmp
    })

    const allLocaleData = {
      ja: jaData,
      en: enData
    }
    console.log(allLocaleData)
  
    const writeDir = path.resolve(fileURLToPath(import.meta.url), '../../src/assets/locale/index.json')
    const writeData = JSON.stringify(allLocaleData)
    const f = fs.openSync(writeDir, 'w')
    fs.writeFileSync(f, writeData)
  })
}

const dirname = fileURLToPath(import.meta.url);
readLocaleAssets(path.resolve(dirname, '../../src/assets/locale'))