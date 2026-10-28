import { MessageCircle } from 'lucide-react'
import { SITE } from '../../../data/site'
import styles from './WhatsAppButton.module.scss'

export const whatsappUrl = (text = 'Bonjour, j’ai une question sur Tailix.') =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`

export function WhatsAppButton() {
    if (!SITE.whatsapp) return null
    return (
        <a className={styles.fab} href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Discuter sur WhatsApp">
            <MessageCircle size={26} aria-hidden="true" />
        </a>
    )
}
