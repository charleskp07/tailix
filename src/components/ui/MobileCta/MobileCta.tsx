import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { SITE } from '../../../data/site'
import { cx } from '../../../utils/cx'
import styles from './MobileCta.module.scss'

/** Barre « Télécharger » fixe sur mobile, visible après un peu de défilement (masquée sur /download). */
export function MobileCta() {
    const { pathname } = useLocation()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 480)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (!show || pathname === '/download') return null
    return (
        <Link to="/download" className={cx(styles.bar, SITE.whatsapp && styles.withChat)}>
            Télécharger Tailix
        </Link>
    )
}
