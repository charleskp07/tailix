import { STORE_LINKS, isRealLink } from '../../../data/storeLinks'
import { cx } from '../../../utils/cx'
import styles from './StoreBadges.module.scss'

const FONT = "-apple-system, 'SF Pro Display', 'Inter Variable', Inter, 'Helvetica Neue', Arial, sans-serif"

function GooglePlayBadge() {
    return <img src="/images/stores/google-play.svg" alt="" className={styles.img} draggable={false} />
}

function AppStoreBadge() {
    return (
        <svg className={styles.img} viewBox="0 0 120 40" aria-hidden="true" focusable="false">
            <rect x="0.4" y="0.4" width="119.2" height="39.2" rx="5" fill="#000" stroke="#a6a6a6" strokeWidth="0.8" />
            <path
                fill="#fff"
                transform="translate(10 9.5) scale(0.44) translate(-203.5 -560)"
                d="M231.174735,567.792499 C232.740177,565.771699 233.926883,562.915484 233.497649,560 C230.939077,560.177808 227.948466,561.814769 226.203475,563.948463 C224.612784,565.88177 223.305444,568.757742 223.816036,571.549042 C226.613071,571.636535 229.499881,569.960061 231.174735,567.792499 L231.174735,567.792499 Z M245,595.217241 C243.880625,597.712195 243.341978,598.827022 241.899976,601.03692 C239.888467,604.121745 237.052156,607.962958 233.53412,607.991182 C230.411652,608.02505 229.606488,605.94498 225.367451,605.970382 C221.128414,605.99296 220.244696,608.030695 217.116618,607.999649 C213.601387,607.968603 210.913765,604.502761 208.902256,601.417937 C203.27452,592.79849 202.68257,582.680377 206.152914,577.298162 C208.621711,573.476705 212.515678,571.241407 216.173986,571.241407 C219.89682,571.241407 222.239372,573.296075 225.322563,573.296075 C228.313175,573.296075 230.133913,571.235762 234.440281,571.235762 C237.700215,571.235762 241.153726,573.022307 243.611302,576.10431 C235.554045,580.546683 236.85858,592.121127 245,595.217241 L245,595.217241 Z"
            />
            <g fill="#fff" fontFamily={FONT}>
                <text x="36" y="14.2" fontSize="7.4" fontWeight="500" textLength="67" lengthAdjust="spacingAndGlyphs">Download on the</text>
                <text x="35.5" y="30.4" fontSize="16.2" fontWeight="600" textLength="70" lengthAdjust="spacingAndGlyphs">App Store</text>
            </g>
        </svg>
    )
}

function ApkBadge() {
    return (
        <span className={styles.apk}>
            <svg className={styles.apkIcon} viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                <path
                    fill="#3ddc84"
                    d="M120.606,169h270.788v220.663c0,13.109-10.628,23.737-23.721,23.737h-27.123v67.203 c0,17.066-13.612,30.897-30.415,30.897c-16.846,0-30.438-13.831-30.438-30.897v-67.203h-47.371v67.203 c0,17.066-13.639,30.897-30.441,30.897c-16.799,0-30.437-13.831-30.437-30.897v-67.203h-27.099 c-13.096,0-23.744-10.628-23.744-23.737V169z M67.541,167.199c-16.974,0-30.723,13.963-30.723,31.2v121.937 c0,17.217,13.749,31.204,30.723,31.204c16.977,0,30.723-13.987,30.723-31.204V198.399 C98.264,181.162,84.518,167.199,67.541,167.199z M391.395,146.764H120.606c3.342-38.578,28.367-71.776,64.392-90.998 l-25.746-37.804c-3.472-5.098-2.162-12.054,2.946-15.525c5.102-3.471,12.044-2.151,15.533,2.943l28.061,41.232 c15.558-5.38,32.446-8.469,50.208-8.469c17.783,0,34.672,3.089,50.229,8.476L334.29,5.395c3.446-5.108,10.41-6.428,15.512-2.957 c5.108,3.471,6.418,10.427,2.946,15.525l-25.725,37.804C363.047,74.977,388.055,108.175,391.395,146.764z M213.865,94.345 c0-8.273-6.699-14.983-14.969-14.983c-8.291,0-14.99,6.71-14.99,14.983c0,8.269,6.721,14.976,14.99,14.976 S213.865,102.614,213.865,94.345z M329.992,94.345c0-8.273-6.722-14.983-14.99-14.983c-8.291,0-14.97,6.71-14.97,14.983 c0,8.269,6.679,14.976,14.97,14.976C323.271,109.321,329.992,102.614,329.992,94.345z M444.48,167.156 c-16.956,0-30.744,13.984-30.744,31.222v121.98c0,17.238,13.788,31.226,30.744,31.226c16.978,0,30.701-13.987,30.701-31.226 v-121.98C475.182,181.14,461.458,167.156,444.48,167.156z"
                />
            </svg>
            <span className={styles.apkText}>
                <span className={styles.apkSmall}>Téléchargement direct</span>
                <span className={styles.apkBig}>APK Android</span>
            </span>
        </span>
    )
}

const STORES = [
    { key: 'googlePlay', label: 'Disponible sur Google Play', Visual: GooglePlayBadge },
    { key: 'appStore', label: "Disponible sur l'App Store", Visual: AppStoreBadge },
    { key: 'androidApk', label: "Télécharger l'APK Android", Visual: ApkBadge }
] as const

type Props = { align?: 'start' | 'center'; className?: string }


export function StoreBadges({ align = 'start', className }: Props) {
    const visible = STORES.filter((s) => (s.key === 'appStore' ? isRealLink(STORE_LINKS.appStore) : Boolean(STORE_LINKS[s.key])))

    return (
        <ul className={cx(styles.row, align === 'center' && styles.center, className)} aria-label="Télécharger Tailix">
            {visible.map(({ key, label, Visual }) => {
                const isApk = key === 'androidApk'
                return (
                    <li key={key}>
                        <a
                            href={STORE_LINKS[key]}
                            className={styles.badge}
                            aria-label={label}
                            download={isApk || undefined}
                            target={isApk ? undefined : '_blank'}
                            rel={isApk ? undefined : 'noopener noreferrer'}
                        >
                            <Visual />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
