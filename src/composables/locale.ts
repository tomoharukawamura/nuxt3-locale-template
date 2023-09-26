import { createLink } from '~/utils/createLink'
import localeData from '../assets/locale/index.json'
export const useLocale = (route: Ref<string>) => {
  const locale = useState<'ja' | 'en'>('locale', () => 'ja')

  const isTopPage = computed(() => route.value === '/' || route.value === '/en')
  const pageName = computed(() => isTopPage.value? 'index': route.value.split('/')[1])
  const localeFromRoute = computed<'en' | 'ja'>(() => {
    if(route.value.endsWith('/en')){
      return 'en'
    } else {
      return 'ja'
    }
  })

  if(process.server){
    locale.value = localeFromRoute.value
  }
  
  const setLocale　= (l: 'ja' | 'en') => {
    if(l === locale.value) return
    locale.value = l
  }

  const switchLocale = () => {
    if(locale.value === 'ja'){
      locale.value = 'en'
    } else {
      locale.value = 'ja'
    }
    const to = createLink(locale.value, `/${pageName.value}`)
    return navigateTo(to)
  }

  const pageContentData = computed(() => {
    const eachLocaleData = localeData[localeFromRoute.value]
    return eachLocaleData[pageName.value as keyof typeof eachLocaleData]
  })
  const $t = (key: string) => pageContentData.value[key as keyof typeof pageContentData.value]

  return {
    locale,
    setLocale,
    switchLocale,
    $t
  }
}