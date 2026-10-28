import { useState } from 'react'
import { cx } from '../../../utils/cx'
import styles from './AppScreen.module.scss'

export type ScreenVariant = 'home' | 'orders' | 'clients' | 'measures' | 'calendar'

type Props = {
    variant: ScreenVariant
    /** Capture réelle de l'application. Si elle est absente ou introuvable, une interface schématique s'affiche. */
    src?: string
    alt?: string
    className?: string
}

const ORDER_STATUS = ['En attente', 'En cours', 'Livrée']
const MEASURES = ['Tour de poitrine', 'Tour de taille', 'Tour de hanches', 'Longueur du dos']
const HILITE = new Set([3, 9, 16, 22])

function Skeleton({ variant }: { variant: ScreenVariant }) {
    if (variant === 'home') {
        return (
            <>
                <p className={styles.title}>Bonjour</p>
                <div className={styles.search}>Livraisons du jour</div>
                {[0, 1, 2].map((i) => (
                    <div key={i} className={styles.row}>
                        <span className={styles.avatar} />
                        <span className={styles.lines}><i /><i /></span>
                    </div>
                ))}
            </>
        )
    }
    if (variant === 'orders') {
        return (
            <>
                <p className={styles.title}>Commandes</p>
                <div className={styles.chips}>
                    {ORDER_STATUS.map((s, i) => (
                        <span key={s} className={cx(styles.chip, i === 1 && styles.chipOn)}>{s}</span>
                    ))}
                </div>
                {[0, 1, 2].map((i) => (
                    <div key={i} className={styles.row}>
                        <span className={styles.avatar} />
                        <span className={styles.lines}><i /><i /></span>
                        <span className={cx(styles.dot, i === 0 && styles.dotAccent)} />
                    </div>
                ))}
            </>
        )
    }
    if (variant === 'clients') {
        return (
            <>
                <p className={styles.title}>Clients</p>
                <div className={styles.search}>Rechercher un client</div>
                {[0, 1, 2, 3].map((i) => (
                    <div key={i} className={styles.row}>
                        <span className={styles.avatar} />
                        <span className={styles.lines}><i /><i /></span>
                    </div>
                ))}
            </>
        )
    }
    if (variant === 'calendar') {
        return (
            <>
                <p className={styles.title}>Calendrier</p>
                <div className={styles.chips}>
                    {['Jour', 'Mois', 'Année'].map((s, i) => (
                        <span key={s} className={cx(styles.chip, i === 1 && styles.chipOn)}>{s}</span>
                    ))}
                </div>
                <div className={styles.cal}>
                    {Array.from({ length: 28 }, (_, i) => (
                        <span key={i} className={cx(styles.day, HILITE.has(i) && styles.dayOn)} />
                    ))}
                </div>
            </>
        )
    }
    return (
        <>
            <p className={styles.title}>Mesures</p>
            <div className={styles.chips}>
                {['Homme', 'Femme', 'Enfant'].map((s, i) => (
                    <span key={s} className={cx(styles.chip, i === 1 && styles.chipOn)}>{s}</span>
                ))}
            </div>
            {MEASURES.map((m) => (
                <div key={m} className={styles.measure}>
                    <span>{m}</span>
                    <b>— cm</b>
                </div>
            ))}
        </>
    )
}

export function AppScreen({ variant, src, alt = '', className }: Props) {
    const [failed, setFailed] = useState(false)
    const showImage = Boolean(src) && !failed

    return (
        <div className={cx(styles.phone, className)}>
            <div className={styles.screen}>
                {showImage ? (
                    <img src={src} alt={alt} className={styles.shot} loading="lazy" onError={() => setFailed(true)} />
                ) : (
                    <div className={styles.ui} aria-hidden="true"><Skeleton variant={variant} /></div>
                )}
            </div>
        </div>
    )
}
