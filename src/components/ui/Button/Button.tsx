import type { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router'
import { cx } from '../../../utils/cx'
import styles from './Button.module.scss'

type Props = {
    children: ReactNode
    variant?: 'primary' | 'accent' | 'ghost'
    size?: 'md' | 'lg'
    /** Lien interne (routeur). */
    to?: string
    /** Lien externe ou fichier. */
    href?: string
    download?: boolean
    type?: 'button' | 'submit'
    onClick?: MouseEventHandler<HTMLElement>
    className?: string
}

export function Button({ children, variant = 'primary', size = 'md', to, href, download, type = 'button', onClick, className }: Props) {
    const cls = cx(styles.btn, styles[variant], size === 'lg' && styles.lg, className)

    if (to) {
        return <Link to={to} className={cls} onClick={onClick}>{children}</Link>
    }
    if (href) {
        const external = /^https?:/.test(href)
        return (
            <a href={href} className={cls} download={download || undefined} onClick={onClick} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                {children}
            </a>
        )
    }
    return <button type={type} className={cls} onClick={onClick}>{children}</button>
}
