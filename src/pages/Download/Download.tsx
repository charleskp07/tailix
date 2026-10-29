import { Download as DownloadIcon, ShieldAlert } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { PageHead } from '../../components/ui/PageHead/PageHead'
import { Seo } from '../../components/ui/Seo/Seo'
import { AndroidIcon, AppleIcon, GooglePlayIcon } from '../../components/ui/StoreIcons/StoreIcons'
import { STORE_LINKS, isRealLink } from '../../data/storeLinks'
import { cx } from '../../utils/cx'
import styles from './Download.module.scss'

const PAGE_URL = typeof window !== 'undefined' ? `${window.location.origin}/download` : ''
const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent)

export function Download() {
    const iosReady = isRealLink(STORE_LINKS.appStore)

    return (
        <>
            <Seo title="Télécharger l’application" description="Installez Tailix sur Android depuis Google Play ou avec le fichier APK." path="/download" />
            <PageHead title="Tailix vous accompagne partout." lead="Choisissez la méthode d’installation qui convient à votre téléphone. Les trois options sont toujours disponibles." />
            <section className={styles.sec}>
                <div className={styles.wrap}>
                    {PAGE_URL && (
                        <aside className={styles.qr} aria-label="Code QR pour installer depuis votre téléphone">
                            <div className={styles.qrCode}><QRCodeSVG value={PAGE_URL} size={120} level="M" fgColor="#00285A" bgColor="#FFFFFF" /></div>
                            <p><b>Vous êtes sur ordinateur ?</b> Scannez ce code avec l’appareil photo de votre téléphone pour ouvrir cette page et installer Tailix.</p>
                        </aside>
                    )}

                    <ul className={styles.list} aria-label="Canaux de téléchargement">
                        <li className={cx(styles.row, isAndroid && styles.rec)}>
                            <GooglePlayIcon className={styles.logo} />
                            <div className={styles.info}>
                                <h2>Google Play</h2>
                                <p>L’installation la plus simple sur Android, avec les mises à jour automatiques.</p>
                                {isAndroid && <p className={styles.hint}>Recommandé pour votre téléphone</p>}
                            </div>
                            <a className={cx(styles.btn, styles.btnNavy)} href={STORE_LINKS.googlePlay} target="_blank" rel="noopener noreferrer">Ouvrir Google Play</a>
                        </li>

                        <li className={styles.row}>
                            <AppleIcon className={cx(styles.logo, styles.apple)} />
                            <div className={styles.info}>
                                <h2>App Store</h2>
                                <p>{iosReady ? 'Installez Tailix sur votre iPhone depuis l’App Store.' : 'La version Android est la première disponible. Nous l’annoncerons sur cette page dès la publication sur iPhone.'}</p>
                            </div>
                            {iosReady ? (
                                <a className={cx(styles.btn, styles.btnNavy)} href={STORE_LINKS.appStore} target="_blank" rel="noopener noreferrer">Ouvrir l’App Store</a>
                            ) : (
                                <span className={cx(styles.btn, styles.btnOff)} aria-disabled="true">En préparation</span>
                            )}
                        </li>

                        <li className={styles.row}>
                            <AndroidIcon className={styles.logo} />
                            <div className={styles.info}>
                                <h2>APK Android</h2>
                                <p>Téléchargez directement le fichier d’installation, sans passer par le Play Store.</p>
                                <ol className={styles.steps}>
                                    <li>Téléchargez le fichier <b>tailix.apk</b>.</li>
                                    <li>Si votre téléphone le demande, autorisez l’installation depuis cette source.</li>
                                    <li>Ouvrez le fichier pour installer Tailix.</li>
                                </ol>
                                <p className={styles.warn}><ShieldAlert size={18} aria-hidden="true" />Installez uniquement un APK téléchargé depuis ce site.</p>
                            </div>
                            <a className={cx(styles.btn, styles.btnAccent)} href={STORE_LINKS.androidApk} download><DownloadIcon size={18} aria-hidden="true" />Télécharger l’APK</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Download
