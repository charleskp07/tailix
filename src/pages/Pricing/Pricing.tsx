import { Seo } from '../../components/ui/Seo/Seo'
import { PageHead } from '../../components/ui/PageHead/PageHead'
import { Reveal } from '../../components/ui/Reveal/Reveal'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { PERIODS, PLANS, totalFor } from '../../data/plans'
import { cx } from '../../utils/cx'
import styles from './Pricing.module.scss'

const fcfa = (n: number) => n.toLocaleString('fr-FR')

export function Pricing() {
    const [months, setMonths] = useState(12)
    const period = PERIODS.find((p) => p.months === months) ?? PERIODS[0]

    return (
        <>
            <Seo title="Tarifs" description="Les formules Tailix en francs CFA : essai gratuit de 30 jours, puis Standard, Premium ou Pack Patron." path="/pricing" />
            <PageHead title="Une formule pour chaque atelier." lead="Tous les prix sont en francs CFA. Plus la durée est longue, plus la réduction est grande. Le paiement se fait dans l’application, par Mobile Money.">
                <div className={styles.toggle} role="radiogroup" aria-label="Durée de l'abonnement">
                        {PERIODS.map((p) => (
                            <button key={p.months} type="button" role="radio" aria-checked={p.months === months} className={cx(styles.opt, p.months === months && styles.optOn)} onClick={() => setMonths(p.months)}>
                                {p.label}
                                {p.discount > 0 && <small>−{Math.round(p.discount * 100)} %</small>}
                            </button>
                        ))}
                    </div>
            </PageHead>

            <section className={styles.body}>
                <div className={styles.wrap}>
                    <Reveal>
                    <ul className={styles.grid}>
                        {PLANS.map((p) => {
                            const total = totalFor(p, period.months, period.discount)
                            return (
                                <li key={p.code} className={cx(styles.plan, p.highlight && styles.on)}>
                                    <h2 className={styles.name}>{p.name}</h2>
                                    <p className={styles.tag}>{p.tagline}</p>

                                    <p className={styles.price}>
                                        {p.monthly === 0 ? '0' : fcfa(Math.round(total / period.months))}
                                        <span> FCFA{p.monthly > 0 && ' / mois'}</span>
                                    </p>
                                    <p className={styles.total}>
                                        {p.monthly === 0 ? '30 jours d’essai complet' : `${fcfa(total)} FCFA pour ${period.label}`}
                                    </p>

                                    <ul className={styles.list}>
                                        {p.features.map((f) => (
                                            <li key={f}><Check size={18} aria-hidden="true" />{f}</li>
                                        ))}
                                    </ul>
                                    <Link to="/download" className={styles.btn}>{p.cta}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    </Reveal>
                    <p className={styles.note}>
                        L’abonnement se souscrit directement dans l’application Tailix : téléchargez-la, puis choisissez votre formule.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Pricing
