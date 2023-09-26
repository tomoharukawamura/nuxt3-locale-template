export const createLink = (locale: 'ja' | 'en', to: string) => {
    if(locale === 'ja' && to === '/index'){
        return '/'
    } else if(locale === 'en' && to === '/index'){
        return '/en'
    } else if(locale === 'ja'){
        return to
    } else {
        return `${to}/en`
    }
}