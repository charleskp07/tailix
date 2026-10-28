import type { ReactNode } from 'react'
import styles from './PageHead.module.scss'

type Props = { title: string; lead?: string; children?: ReactNode }


export function PageHead({ title, lead, children }: Props) {
    return (
        <header className={styles.head}>
            <span className={styles.art} aria-hidden="true" />
            <div className={styles.wrap}>
                <h1 className={styles.h1}>{title}</h1>
                {lead && <p className={styles.lead}>{lead}</p>}
                {children}
            </div>
            <div className={styles.tape} aria-hidden="true" />
        </header>
    )
}
