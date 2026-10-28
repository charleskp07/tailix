import { lazy } from 'react'
import { Route, Routes } from 'react-router'
import { Layout } from './components/layout/Layout/Layout'

const Home = lazy(() => import('./pages/Home/Home'))
const Features = lazy(() => import('./pages/Features/Features'))
const Pricing = lazy(() => import('./pages/Pricing/Pricing'))
const Download = lazy(() => import('./pages/Download/Download'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Legal = lazy(() => import('./pages/Legal/Legal'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="features" element={<Features />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="download" element={<Download />} />
                <Route path="contact" element={<Contact />} />
                <Route path="legal/:slug" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
