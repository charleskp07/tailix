import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { MobileCta } from '../../ui/MobileCta/MobileCta'
import { WhatsAppButton } from '../../ui/WhatsAppButton/WhatsAppButton'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export function Layout() {
    return (
        <>
            <a className="skip-link" href="#main">Aller au contenu</a>
            <ScrollToTop />
            <Navbar />
            <main id="main" tabIndex={-1}>
                <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <MobileCta />
            <WhatsAppButton />
        </>
    )
}
