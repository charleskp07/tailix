import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { PageHead } from '../../components/ui/PageHead/PageHead'
import { Seo } from '../../components/ui/Seo/Seo'
import { whatsappUrl } from '../../components/ui/WhatsAppButton/WhatsAppButton'
import { SITE } from '../../data/site'
import styles from './Contact.module.scss'

export function Contact() {
    const hasContact = Boolean(SITE.email || SITE.whatsapp)

    return (
        <>
            <Seo title="Contact" description="Une question sur Tailix ? Contactez-nous." path="/contact" />
            <PageHead title="Parlons de votre atelier." lead="Une question sur Tailix, l’installation ou les formules ? Écrivez-nous." />
            <section className={styles.sec}>
                <div className={styles.info}>
                    {hasContact ? (
                        <ul className={styles.list}>
                            {SITE.whatsapp && (
                                <li>
                                    <a className={styles.line} href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle size={28} aria-hidden="true" />
                                        <span>Écrire sur WhatsApp</span>
                                        <ArrowUpRight size={22} aria-hidden="true" />
                                    </a>
                                </li>
                            )}
                            {SITE.email && (
                                <li>
                                    <a className={styles.line} href={`mailto:${SITE.email}`}>
                                        <Mail size={28} aria-hidden="true" />
                                        <span>{SITE.email}</span>
                                        <ArrowUpRight size={22} aria-hidden="true" />
                                    </a>
                                </li>
                            )}
                        </ul>
                    ) : (
                        <p className={styles.todo}>Les coordonnées s’afficheront ici dès qu’elles seront renseignées dans <code>data/site.ts</code> (e-mail et WhatsApp).</p>
                    )}
                    <p className={styles.note}>Vous pouvez aussi consulter la FAQ sur la page d’accueil : elle répond aux questions les plus fréquentes.</p>
                </div>
                <img className={styles.art} src="/images/illustrations/contact.png" alt="" width={900} height={900} loading="lazy" />
            </section>
        </>
    )
}

export default Contact
