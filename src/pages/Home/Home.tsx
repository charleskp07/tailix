import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Bell, Check, Minus, Plus, WifiOff } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { AppScreen, type ScreenVariant } from '../../components/ui/AppScreen/AppScreen'
import { Seo } from '../../components/ui/Seo/Seo'
import { Reveal } from '../../components/ui/Reveal/Reveal'
import { StoreBadges } from '../../components/ui/StoreBadges/StoreBadges'
import { FAQ } from '../../data/faq'
import { SCREENS } from '../../data/screens'
import { SITE } from '../../data/site'
import { FEATURES } from '../../data/features'
import { PLANS } from '../../data/plans'
import { TESTIMONIALS } from '../../data/testimonials'
import { cx } from '../../utils/cx'
import styles from './Home.module.scss'

const SHOWCASE: { id: string; label: string; variant: ScreenVariant; title: string; text: string; points: string[] }[] = [
    {
        id: 'accueil',
        label: 'Accueil',
        variant: 'home',
        title: 'Votre journée en un coup d’œil.',
        text: 'Dès l’ouverture, retrouvez les livraisons du jour, les commandes en retard et des raccourcis pour ajouter un client, une commande ou des mesures.',
        points: ['Livraisons du jour et retards signalés', 'Raccourcis : client, commande, mesures, tissus']
    },
    {
        id: 'clients',
        label: 'Clients',
        variant: 'clients',
        title: 'Chaque client a sa fiche.',
        text: 'Coordonnées, photo, notes et profil : tout ce qu’il faut savoir avant le prochain rendez-vous, au même endroit.',
        points: ['Recherche par nom ou téléphone', 'Filtre par hommes, femmes ou enfants']
    },
    {
        id: 'commandes',
        label: 'Commandes',
        variant: 'orders',
        title: 'De l’attente à la livraison.',
        text: 'Statut, urgence, montant et mesures jointes : suivez chaque commande et gardez un œil sur les retards.',
        points: ['Statut et urgence de chaque commande', 'Mesures jointes à la commande']
    },
    {
        id: 'calendrier',
        label: 'Calendrier',
        variant: 'calendar',
        title: 'Aucune livraison oubliée.',
        text: 'Une vue par jour, par mois ou par année, avec les retards signalés et des rappels avant chaque date prévue.',
        points: ['Vue par jour, mois ou année', 'Rappels avant la date et en cas de retard']
    }
]

const STEPS = [
    { title: 'Téléchargez Tailix', text: 'Installez l’application depuis Google Play ou avec le fichier APK, puis créez votre compte. Les 30 premiers jours sont un essai complet.' },
    { title: 'Enregistrez vos clients', text: 'Ajoutez leurs coordonnées et prenez leurs mesures selon le profil homme, femme ou enfant.' },
    { title: 'Suivez vos commandes', text: 'Fixez la date de livraison, recevez les rappels et gardez un œil sur les retards.' }
]

const BENTO = ['clients', 'mesures', 'commandes', 'calendrier', 'tissus', 'galerie', 'rappels', 'hors-ligne']
const fcfa = (n: number) => `${n.toLocaleString('fr-FR')} FCFA`

function Showcase() {
    const [tab, setTab] = useState(SHOWCASE[0].id)
    const reduce = useReducedMotion()
    const current = SHOWCASE.find((s) => s.id === tab) ?? SHOWCASE[0]

    return (
        <section className={cx(styles.sec, styles.navy)} aria-labelledby="showcase-title">
            <div className={styles.wrap}>
                <h2 id="showcase-title" className={styles.h2}>L’atelier dans votre poche.</h2>
                <div className={styles.tabs} role="tablist" aria-label="Aperçus de l'application">
                    {SHOWCASE.map((s) => (
                        <button key={s.id} role="tab" id={`tab-${s.id}`} aria-selected={tab === s.id} aria-controls="showcase-panel" className={cx(styles.tab, tab === s.id && styles.tabOn)} onClick={() => setTab(s.id)}>
                            {s.label}
                        </button>
                    ))}
                </div>
                <div id="showcase-panel" role="tabpanel" aria-labelledby={`tab-${current.id}`} className={styles.panel}>
                    <AnimatePresence mode="wait">
                        <motion.div key={current.id} className={styles.panelText} initial={reduce ? false : { opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={reduce ? undefined : { opacity: 0, x: 16 }} transition={{ duration: 0.25 }}>
                            <h3 className={styles.h3}>{current.title}</h3>
                            <p className={styles.lead}>{current.text}</p>
                            <ul className={styles.points}>
                                {current.points.map((p) => (
                                    <li key={p}><Check size={18} aria-hidden="true" />{p}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <motion.div key={current.id + 'p'} className={styles.panelPhone} initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
                            <AppScreen variant={current.variant} src={SCREENS[current.variant]} alt={`Écran ${current.label} de l’application Tailix`} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

function Faq() {
    const [open, setOpen] = useState<number | null>(0)
    const reduce = useReducedMotion()
    return (
        <ul className={styles.faq}>
            {FAQ.map((f, i) => {
                const isOpen = open === i
                return (
                    <li key={f.q} className={styles.faqItem}>
                        <h3>
                            <button type="button" className={styles.faqBtn} aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                                <span>{f.q}</span>
                                {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
                            </button>
                        </h3>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div id={`faq-${i}`} initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduce ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className={styles.faqPanel}>
                                    <p>{f.a}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                )
            })}
        </ul>
    )
}

export function Home() {
    const reduce = useReducedMotion()
    const enter = (delay: number) => (reduce ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const } })
    const bento = BENTO.map((id) => FEATURES.find((f) => f.id === id)).filter((f): f is NonNullable<typeof f> => Boolean(f))

    return (
        <>
            <Seo path="/" />
            <section className={styles.hero}>
                <span className={styles.heroArt} aria-hidden="true" />
                <div className={cx(styles.wrap, styles.heroGrid)}>
                    <div className={styles.heroText}>
                        <motion.h1 className={styles.h1} {...enter(0)}>Votre savoir faire mérite une meilleure organisation.</motion.h1>
                        <motion.p className={styles.lead} {...enter(0.12)}>
                            Clients, mesures, commandes et tissus : retrouvez l’essentiel de votre atelier dans un carnet numérique pensé pour les professionnels de la couture.
                        </motion.p>
                        <motion.div className={styles.actions} {...enter(0.24)}>
                            <Link to="/download" className={cx(styles.btn, styles.btnAccent)}>Télécharger l’application <ArrowRight size={18} aria-hidden="true" /></Link>
                            <Link to="/features" className={cx(styles.btn, styles.btnGhost)}>Voir les fonctionnalités</Link>
                        </motion.div>
                    </div>
                    <motion.div className={styles.heroPhones} {...enter(0.2)}>
                        <AppScreen variant="orders" src={SCREENS.orders} alt="Écran Commandes de l’application Tailix" className={styles.phoneBack} />
                        <AppScreen variant="home" src={SCREENS.home} alt="Écran d’accueil de l’application Tailix" className={styles.phoneFront} />
                        <span className={cx(styles.chip, styles.chipA)}><Bell size={18} aria-hidden="true" />Rappels de livraison</span>
                        <span className={cx(styles.chip, styles.chipB)}><WifiOff size={18} aria-hidden="true" />Fonctionne hors ligne</span>
                    </motion.div>
                </div>
                <div className={styles.tape} aria-hidden="true" />
            </section>

            <section className={styles.sec} aria-labelledby="value-title">
                <div className={cx(styles.wrap, styles.valueGrid)}>
                    <h2 id="value-title" className={styles.h2}>Moins de papiers dispersés, plus de clarté.</h2>
                    <p className={styles.lead}>
                        Des clients notés ici, des mesures là, des échéances dans la tête. Tailix réunit tout dans un seul carnet, pour que vous passiez votre temps à coudre, pas à chercher.
                    </p>
                </div>
            </section>

            <section className={cx(styles.sec, styles.secTop0)} aria-labelledby="steps-title">
                <div className={styles.wrap}>
                    <h2 id="steps-title" className={styles.h2}>Prêt en trois étapes.</h2>
                    <Reveal>
                    <ol className={styles.steps}>
                        {STEPS.map((st, i) => (
                            <li key={st.title}>
                                <span className={styles.stepNo} aria-hidden="true">{i + 1}</span>
                                <h3>{st.title}</h3>
                                <p>{st.text}</p>
                            </li>
                        ))}
                    </ol>
                    </Reveal>
                </div>
            </section>

            {SITE.demoVideo && (
                <section className={cx(styles.sec, styles.secTop0)} aria-labelledby="video-title">
                    <div className={styles.wrap}>
                        <h2 id="video-title" className={styles.h2}>Tailix en action.</h2>
                        <video className={styles.video} src={SITE.demoVideo} controls playsInline preload="metadata" />
                    </div>
                </section>
            )}

            <section className={cx(styles.sec, styles.bentoSec)} aria-labelledby="features-title">
                <div className={styles.wrap}>
                    <h2 id="features-title" className={styles.h2}>Tout ce qu’il faut à l’atelier.</h2>
                    <Reveal>
                    <ul className={styles.bento}>
                        {bento.map((f) => (
                            <li key={f.id} className={styles.cell}>
                                <span className={styles.cellIcon}><f.icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                            </li>
                        ))}
                    </ul>
                    </Reveal>
                </div>
            </section>

            <Showcase />

            <section className={cx(styles.sec, styles.sand)} aria-labelledby="offline-title">
                <div className={cx(styles.wrap, styles.offlineGrid)}>
                    <div>
                        <h2 id="offline-title" className={styles.h2}>Le réseau coupe. Votre travail continue.</h2>
                        <p className={styles.lead}>Tout s’enregistre d’abord sur votre téléphone, puis se synchronise automatiquement dès que la connexion revient.</p>
                    </div>
                    <ul className={styles.offlineList}>
                        <li>Notez une mesure sans réseau</li>
                        <li>Créez une commande en déplacement</li>
                        <li>Recevez vos rappels de livraison</li>
                    </ul>
                </div>
            </section>

            <section className={styles.sec} aria-labelledby="pricing-title">
                <div className={styles.wrap}>
                    <h2 id="pricing-title" className={styles.h2}>Des formules claires, en FCFA.</h2>
                    <p className={cx(styles.lead, styles.leadSm)}>Commencez par 30 jours d’essai complet, puis choisissez la formule qui correspond à votre atelier.</p>
                    <ul className={styles.plans}>
                        {PLANS.map((p) => (
                            <li key={p.code} className={cx(styles.plan, p.highlight && styles.planOn)}>
                                <h3>{p.name}</h3>
                                <p className={styles.planTag}>{p.tagline}</p>
                                <p className={styles.price}>{p.monthly === 0 ? 'Gratuit' : fcfa(p.monthly)}{p.monthly > 0 && <span> / mois</span>}</p>
                            </li>
                        ))}
                    </ul>
                    <Link to="/pricing" className={cx(styles.btn, styles.btnNavy)}>Comparer les formules <ArrowRight size={18} aria-hidden="true" /></Link>
                </div>
            </section>

            {TESTIMONIALS.length > 0 && (
                <section className={cx(styles.sec, styles.secTop0)} aria-labelledby="t-title">
                    <div className={styles.wrap}>
                        <h2 id="t-title" className={styles.h2}>Ils travaillent avec Tailix.</h2>
                        <ul className={styles.quotes}>
                            {TESTIMONIALS.map((t) => (
                                <li key={t.name}>
                                    <blockquote>{t.text}</blockquote>
                                    <p>{t.name}, {t.role}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            <section className={cx(styles.sec, styles.secTop0)} aria-labelledby="faq-title">
                <div className={cx(styles.wrap, styles.faqGrid)}>
                    <h2 id="faq-title" className={styles.h2}>Vos questions.</h2>
                    <Faq />
                </div>
            </section>

            <section className={cx(styles.sec, styles.cta)} aria-labelledby="cta-title">
                <div className={cx(styles.wrap, styles.ctaInner)}>
                    <h2 id="cta-title" className={styles.h2}>Prêt à ranger votre atelier ?</h2>
                    <p className={styles.lead}>Téléchargez Tailix et profitez de 30 jours d’essai complet.</p>
                    <StoreBadges align="center" />
                </div>
            </section>
        </>
    )
}

export default Home
