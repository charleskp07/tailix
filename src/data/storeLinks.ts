export const STORE_LINKS = {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.tailix.app',
    appStore: 'https://apps.apple.com/app/tailix/id0000000000',
    androidApk: '/downloads/tailix.apk'
}

/** Vrai si le lien est renseigné et n'est pas un lien d'exemple (identifiant App Store en 0000…). */
export const isRealLink = (url: string) => Boolean(url) && !/id0+$/.test(url)
