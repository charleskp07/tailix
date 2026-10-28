import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useParams } from 'react-router'
import { PageHead } from '../../components/ui/PageHead/PageHead'
import { Seo } from '../../components/ui/Seo/Seo'
import { LEGAL_DOCS, fillLegal } from '../../data/legal'
import { cx } from '../../utils/cx'
import NotFound from '../NotFound/NotFound'
import styles from './Legal.module.scss'

const PLACEHOLDER_SPLIT = /(\[À COMPLÉTER : [^\]]+\])/g

/** Affiche le texte, en surlignant les passages encore à compléter. */
function renderText(raw: string): ReactNode[] {
    return fillLegal(raw)
        .split(PLACEHOLDER_SPLIT)
        .map((part, i) => (part.startsWith('[À COMPLÉTER') ? <mark key={i} className={styles.todo}>{part}</mark> : part))
}

export function Legal() {
    const { slug = '' } = useParams()
    const doc = LEGAL_DOCS[slug]
    const [active, setActive] = useState('s1')

    // Met en avant, dans le sommaire, la section actuellement lue
    useEffect(() => {
        if (!doc) return
        const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-legal-section]'))
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
                if (visible[0]) setActive(visible[0].target.id)
            },
            { rootMargin: '-20% 0px -65% 0px' }
        )
        sections.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [doc])

    if (!doc) return <NotFound />

    const hasTodo = doc.sections.some((s) => [...(s.paragraphs ?? []), ...(s.list ?? [])].some((t) => fillLegal(t).includes('[À COMPLÉTER')))

    return (
        <>
            <Seo title={doc.title} description={doc.description} path={`/legal/${doc.slug}`} />
            <PageHead title={doc.title} lead={doc.lead} />
            <div className={styles.layout}>
                <nav className={styles.toc} aria-label="Sommaire">
                    <p className={styles.tocTitle}>Sommaire</p>
                    <ol>
                        {doc.sections.map((s, i) => (
                            <li key={s.title}>
                                <a href={`#s${i + 1}`} className={cx(active === `s${i + 1}` && styles.tocOn)} aria-current={active === `s${i + 1}` ? 'true' : undefined}>
                                    <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    {s.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                <article className={styles.content}>
                    {hasTodo && (
                        <p className={styles.draft} role="note">
                            Brouillon : les passages en surbrillance sont à compléter dans <code>src/data/legal.ts</code>, puis le texte doit être relu par un juriste avant publication.
                        </p>
                    )}
                    {doc.sections.map((s, i) => (
                        <section key={s.title} id={`s${i + 1}`} data-legal-section className={styles.section}>
                            <h2><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{s.title}</h2>
                            {s.paragraphs?.map((p) => <p key={p}>{renderText(p)}</p>)}
                            {s.list && (
                                <ul>
                                    {s.list.map((li) => <li key={li}>{renderText(li)}</li>)}
                                </ul>
                            )}
                        </section>
                    ))}
                </article>
            </div>
        </>
    )
}

export default Legal
