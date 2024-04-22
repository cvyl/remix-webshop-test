import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
    return [
        { title: 'New Remix App' },
        { name: 'description', content: 'Welcome to Remix!' },
    ]
}

export default function Index() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">About</h1>

            <p className="text-lg mb-4">
                This is a simple webshop application built with Remix.
            </p>

        </div>
    )
}
