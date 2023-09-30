import { createLink } from '~/utils/createLink'
import localeData from '../assets/locale/index.json'

export const useLocale = () => {
  const route = computed(() => useRoute().path)
  const isTopPage = computed(() => route.value === '/' || route.value === '/en')
  const pageName = computed(() => isTopPage.value? 'index': route.value.split('/')[1])
  const locale = computed<'en' | 'ja'>(() => route.value.endsWith('/en') ? 'en' : 'ja')
  
  const setLocale　= (l: 'ja' | 'en') => {
    if(l === locale.value) return
    const to = createLink(l, `/${pageName.value}`)
    return navigateTo(to)
  }

  const switchLocale = () => {
    const counterLocale = locale.value === 'ja'? 'en': 'ja'
    const to = createLink(counterLocale, `/${pageName.value}`)
    return navigateTo(to)
  }

  const pageContentData = computed(() => {
    const eachLocaleData = localeData[locale.value]
    return eachLocaleData[pageName.value as keyof typeof eachLocaleData]
  })
  const $t = (key: string) => pageContentData.value[key as keyof typeof pageContentData.value]

  return {
    route,
    pageName,
    locale,
    setLocale,
    switchLocale,
    $t
  }
}