import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { NAV_LINKS, SITE } from '../../../data/site'
import { cx } from '../../../utils/cx'
import { Logo } from '../../ui/Logo/Logo'
import styles from './Navbar.module.scss'

export function Navbar() {
    const [open, setOpen] = useState(false)
    const [compact, setCompact] = useState(false)
    const reduce = useReducedMotion()
    const { pathname } = useLocation()
    const toggleRef = useRef<HTMLButtonElement>(null)
    const panelRef = useRef<HTMLElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)

    // Un fin trait orange se remplit au fil de la lecture de la page
    const { scrollYProgress } = useScroll()
    const spring = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })
    const progress = reduce ? scrollYProgress : spring

    const pillTransition = reduce ? { duration: 0 } : { type: 'spring' as const, stiffness: 380, damping: 32 }

    // Le creux de la bannière épouse la largeur du groupe « liens + bouton »
    useLayoutEffect(() => {
        const el = rightRef.current
        if (!el) return
        const apply = () => {
            const sidePadding = window.innerWidth >= 768 ? 32 : 20
            document.documentElement.style.setProperty('--notch-w', `${Math.ceil(el.getBoundingClientRect().width) + sidePadding + 28}px`)
        }
        apply()
        const observer = new ResizeObserver(apply)
        observer.observe(el)
        window.addEventListener('resize', apply)
        return () => {
            observer.disconnect()
            window.removeEventListener('resize', apply)
        }
    }, [])

    useEffect(() => {
        const onScroll = () => setCompact(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false)
                toggleRef.current?.focus()
            }
        }
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKey)
        panelRef.current?.focus()
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKey)
        }
    }, [open])

    return (
        <header className={cx(styles.header, compact && styles.compact)}>
            <div className={styles.bar}>
                <Link to="/" className={styles.logo} aria-label={`${SITE.name}, accueil`}>
                    <Logo light={!compact} />
                </Link>

                <div ref={rightRef} className={styles.right}>
                <nav className={styles.desktop} aria-label="Navigation principale">
                    {NAV_LINKS.map((l) => (
                        <NavLink key={l.to} to={l.to} end={l.to === '/'} className={styles.link}>
                            {({ isActive }) => (
                                <>
                                    {isActive && <motion.span layoutId="nav-pill" className={styles.pill} transition={pillTransition} />}
                                    <span className={cx(styles.label, isActive && styles.labelOn)}>{l.label}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <Link to="/download" className={styles.cta}>
                        <span>Télécharger</span>
                        <span className={styles.ctaIcon}><ArrowUpRight size={16} aria-hidden="true" /></span>
                    </Link>
                    <button
                        ref={toggleRef}
                        type="button"
                        className={styles.toggle}
                        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
                </div>

                <motion.span className={styles.progress} style={{ scaleX: progress }} aria-hidden="true" />
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        id="mobile-menu"
                        ref={panelRef}
                        tabIndex={-1}
                        className={styles.mobile}
                        aria-label="Menu mobile"
                        initial={reduce ? false : { opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={reduce ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <ol className={styles.mobileList}>
                            {NAV_LINKS.map((l, i) => (
                                <li key={l.to}>
                                    <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => cx(styles.mobileLink, isActive && styles.mobileOn)}>
                                        <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ol>
                        <Link to="/download" className={styles.mobileCta}>
                            Télécharger l'application <ArrowUpRight size={20} aria-hidden="true" />
                        </Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
