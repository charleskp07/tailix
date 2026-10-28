import { Button } from '../../components/ui/Button/Button'
import { Seo } from '../../components/ui/Seo/Seo'
import styles from './NotFound.module.scss'

export function NotFound() {
    return (
        <>
            <Seo title="Page introuvable" noindex />
            <section className={styles.sec}>
                <p className={styles.big} aria-hidden="true">404</p>
                <h1 className={styles.h1}>Cette page n’existe pas.</h1>
                <p className={styles.text}>Le lien est peut-être ancien. Revenez à l’accueil pour retrouver votre chemin.</p>
                <Button to="/" size="lg" variant="accent">Retour à l’accueil</Button>
            </section>
        </>
    )
}

export default NotFound
