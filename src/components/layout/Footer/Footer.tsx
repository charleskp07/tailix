import { Link } from 'react-router'
import { Logo } from '../../ui/Logo/Logo'
import { StoreBadges } from '../../ui/StoreBadges/StoreBadges'
import { SITE } from '../../../data/site'
import styles from './Footer.module.scss'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <p className={styles.logo}><Logo light /></p>
                    <p className={styles.about}>{SITE.tagline}. {SITE.description}</p>
                    <StoreBadges className={styles.stores} />
                    {SITE.social.length > 0 && (
                        <ul className={styles.social}>
                            {SITE.social.map((s) => (
                                <li key={s.href}><a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
                            ))}
                        </ul>
                    )}
                </div>

                <nav aria-label="Navigation du pied de page">
                    <h2 className={styles.heading}>Navigation</h2>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/features">Fonctionnalités</Link></li>
                        <li><Link to="/pricing">Tarifs</Link></li>
                        <li><Link to="/legal/about">À propos</Link></li>
                    </ul>
                </nav>

                <nav aria-label="Application">
                    <h2 className={styles.heading}>Application</h2>
                    <ul>
                        <li><Link to="/download">Télécharger</Link></li>
                        <li><Link to="/pricing">Formules et tarifs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <nav aria-label="Informations légales">
                    <h2 className={styles.heading}>Légal</h2>
                    <ul>
                        <li><Link to="/legal/privacy">Politique de confidentialité</Link></li>
                        <li><Link to="/legal/terms">Conditions d’utilisation</Link></li>
                    </ul>
                </nav>
            </div>
            <p className={styles.copy}>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
        </footer>
    )
}
