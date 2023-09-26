import localeData from '../assets/locale/index.json'
export const useLocale = (route: Ref<string>) => {
  const locale = useState<'ja' | 'en'>('locale', () => 'ja')

  const isTopPage = computed(() => route.value === '/ja' || route.value === '/en')
  const pageName = computed(() => isTopPage.value? 'index': route.value.split('/')[1])
  const localeFromRoute = computed(() => 
    isTopPage.value
    ? route.value.split('/')[1] as 'ja' | 'en'
    : route.value.split('/')[2] as 'ja' | 'en'
  )

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
    const to = isTopPage.value? `/${locale.value}`: `/${pageName.value}/${locale.value}`
    return navigateTo(to)
  }

  const pageContentData = computed(() => localeData[localeFromRoute.value][pageName.value])
  const $t = (key: string) => {
    return pageContentData.value[key as keyof typeof pageContentData.value]
  }

  return {
    locale,
    setLocale,
    switchLocale,
    $t
  }
}