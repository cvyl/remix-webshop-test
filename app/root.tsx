//import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from '@remix-run/node'
import styles from '~/styles/global.css'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'

import Header from './components/Header'
import Footer from './components/Footer'

export const links: LinksFunction = () => [
    ...(styles ? [{ rel: 'stylesheet', href: styles }] : []),
]

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <Footer />
            </body>
        </html>
    )
}
