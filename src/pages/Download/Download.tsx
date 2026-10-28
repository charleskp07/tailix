import { Download as DownloadIcon, ShieldAlert } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { Seo } from '../../components/ui/Seo/Seo'
import { PageHead } from '../../components/ui/PageHead/PageHead'
import { STORE_LINKS } from '../../data/storeLinks'
import { cx } from '../../utils/cx'
import styles from './Download.module.scss'

const isPlaceholder = (url: string) => !url || /id0+$/.test(url)
const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent)

const PAGE_URL = typeof window !== 'undefined' ? `${window.location.origin}/download` : ''

export function Download() {
    const iosReady = !isPlaceholder(STORE_LINKS.appStore)

    return (
        <>
            <Seo title="Télécharger l’application" description="Installez Tailix sur Android depuis Google Play ou avec le fichier APK." path="/download" />
            <PageHead title="Tailix vous accompagne partout." lead="Choisissez la méthode d’installation qui convient à votre téléphone. Les trois options sont toujours disponibles." />
            <section className={styles.sec}>
                <div className={styles.wrap}>
                    {PAGE_URL && (
                        <aside className={styles.qr} aria-label="Code QR pour installer depuis votre téléphone">
                            <div className={styles.qrCode}><QRCodeSVG value={PAGE_URL} size={128} level="M" fgColor="#00285A" bgColor="#FFFFFF" /></div>
                            <p><b>Vous êtes sur ordinateur ?</b> Scannez ce code avec l’appareil photo de votre téléphone pour ouvrir cette page et installer Tailix.</p>
                        </aside>
                    )}
                    <article className={cx(styles.row, isAndroid && styles.rec)}>
                        <h2>Google Play</h2>
                        <div>
                            <p>L’installation la plus simple sur Android, avec les mises à jour automatiques.</p>
                            {isAndroid && <p className={styles.hint}>Recommandé pour votre téléphone</p>}
                        </div>
                        <a className={cx(styles.btn, styles.btnNavy)} href={STORE_LINKS.googlePlay} target="_blank" rel="noopener noreferrer">Ouvrir Google Play</a>
                    </article>

                    <article className={styles.row}>
                        <h2>App Store</h2>
                        <p>{iosReady ? 'Installez Tailix sur votre iPhone depuis l’App Store.' : 'La version Android est la première disponible. Nous l’annoncerons sur cette page dès la publication sur iPhone.'}</p>
                        {iosReady ? (
                            <a className={cx(styles.btn, styles.btnNavy)} href={STORE_LINKS.appStore} target="_blank" rel="noopener noreferrer">Ouvrir l’App Store</a>
                        ) : (
                            <span className={cx(styles.btn, styles.btnOff)} aria-disabled="true">En préparation</span>
                        )}
                    </article>

                    <article className={cx(styles.row, styles.apk)}>
                        <h2>APK Android</h2>
                        <div>
                            <p>Téléchargez directement le fichier d’installation, sans passer par le Play Store.</p>
                            <ol className={styles.steps}>
                                <li>Téléchargez le fichier <b>tailix.apk</b>.</li>
                                <li>Si votre téléphone le demande, autorisez l’installation depuis cette source.</li>
                                <li>Ouvrez le fichier pour installer Tailix.</li>
                            </ol>
                            <p className={styles.warn}><ShieldAlert size={18} aria-hidden="true" />Installez uniquement un APK téléchargé depuis ce site.</p>
                        </div>
                        <a className={cx(styles.btn, styles.btnAccent)} href={STORE_LINKS.androidApk} download><DownloadIcon size={18} aria-hidden="true" />Télécharger l’APK</a>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Download
