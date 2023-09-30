import { readdirSync } from 'fs'
import { NuxtPage } from 'nuxt/schema'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

export default function (route: NuxtPage[]) {
  const pagesDir = resolve(fileURLToPath(import.meta.url), '../../src/pages')
  const files = readdirSync(pagesDir)
  const vueFiles = files.filter(f => /(.+).vue/.test(f))
  vueFiles.forEach(v => {
    if(v !== 'index.vue'){
      const name = v.split('.')[0]
      route.push({
        name: `${name}-en`,
        path: `/${name}/en`,
        file: resolve(fileURLToPath(import.meta.url), `../../src/pages/${v}`),
        children: []
      })
    } else {
      route.push({
        name: 'index-en',
        path: '/en',
        file: resolve(fileURLToPath(import.meta.url), `../../src/pages/${v}`),
        children: []
      })
    }
  })
}