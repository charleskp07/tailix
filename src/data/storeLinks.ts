export const STORE_LINKS = {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.tailix.app',
    appStore: 'https://apps.apple.com/app/tailix/id0000000001',
    androidApk: '/downloads/tailix.apk'
}

export const isRealLink = (url: string) => Boolean(url) && !/id0+$/.test(url)