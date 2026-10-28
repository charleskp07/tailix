import { useEffect } from 'react'
import { SITE } from '../../../data/site'

type Props = { title?: string; description?: string; path?: string; noindex?: boolean }

function setMeta(attr: 'name' | 'property', key: string, content: string) {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
    if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
    }
    el.setAttribute('content', content)
}

/** Met à jour le titre et les balises de partage de la page courante (sans dépendance externe). */
export function Seo({ title, description = SITE.description, path = '', noindex = false }: Props) {
    useEffect(() => {
        const fullTitle = title ? `${title} · ${SITE.name}` : `${SITE.name}, ${SITE.tagline.charAt(0).toLowerCase()}${SITE.tagline.slice(1)}`
        const base = SITE.url.replace(/\/$/, '')

        document.title = fullTitle
        setMeta('name', 'description', description)
        setMeta('name', 'robots', noindex ? 'noindex' : 'index,follow')
        setMeta('property', 'og:title', fullTitle)
        setMeta('property', 'og:description', description)
        setMeta('property', 'og:image', `${base}/og-image.png`)
        if (base) {
            setMeta('property', 'og:url', `${base}${path}`)
            let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
            if (!link) {
                link = document.createElement('link')
                link.rel = 'canonical'
                document.head.appendChild(link)
            }
            link.href = `${base}${path}`
        }
    }, [title, description, path, noindex])

    return null
}
