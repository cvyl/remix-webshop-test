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
            <h1 className="text-3xl font-bold mb-8">Contact</h1>

            <p className="text-lg mb-4">
                Contact me...
            </p>
        </div>
    )
}
