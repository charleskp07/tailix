import { Button } from '../../components/ui/Button/Button'
import { Seo } from '../../components/ui/Seo/Seo'
import { PageHead } from '../../components/ui/PageHead/PageHead'
import { FEATURES } from '../../data/features'
import { cx } from '../../utils/cx'
import styles from './Features.module.scss'

const TONES = ['navy', 'sky', 'accent', 'sand'] as const

export function Features() {
    return (
        <>
            <Seo title="Fonctionnalités" description="Clients, mesures, commandes, calendrier, tissus, modèles et rappels : tout ce que fait Tailix." path="/features" />
            <PageHead title="Tout ce qu’il faut à l’atelier." lead="Du premier rendez-vous à la livraison, Tailix garde vos clients, vos mesures et vos commandes au même endroit." />
            <section className={styles.sec}>
                <ul className={styles.list}>
                    {FEATURES.map((f, i) => (
                        <li key={f.id} className={styles.item}>
                            <div className={cx(styles.badge, styles[TONES[i % TONES.length]])}>
                                <f.icon size={40} strokeWidth={1.4} aria-hidden="true" />
                            </div>
                            <div className={styles.text}>
                                <h2>{f.title}{f.soon && <small>Bientôt</small>}</h2>
                                <p>{f.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={styles.cta}>
                    <Button to="/download" size="lg">Télécharger l’application</Button>
                </div>
            </section>
        </>
    )
}

export default Features
