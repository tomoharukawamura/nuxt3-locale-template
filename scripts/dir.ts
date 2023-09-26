import fs from 'fs'
import { NuxtPage } from 'nuxt/schema'
import path from 'path'
import { fileURLToPath } from 'url'
export const addRouteRules = (route: NuxtPage[]) => {
  const pagesDir = path.resolve(fileURLToPath(import.meta.url), '../../src/pages')
  const files = fs.readdirSync(pagesDir)
  const vueFiles = files.filter(f => /(.+).vue/.test(f))
  vueFiles.forEach(v => {
    if(v !== 'index.vue'){
      const name = v.split('.')[0]
      route.push({
        name: `${name}-en`,
        path: `/${name}/en`,
        file: path.resolve(fileURLToPath(import.meta.url), `../../src/pages/${v}`),
        children: []
      })
    } else {
      route.push({
        name: 'index-en',
        path: '/en',
        file: path.resolve(fileURLToPath(import.meta.url), `../../src/pages/${v}`),
        children: []
      })
    }
  })
}