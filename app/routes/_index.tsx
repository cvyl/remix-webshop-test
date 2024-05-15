import type { MetaFunction } from '@remix-run/node'
export const meta: MetaFunction = () => {
    return [
        { title: 'New Remix App' },
        { name: 'description', content: 'Welcome to Remix!' },
    ]
}

import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div>
            <h1>i need to make thisu a  pretty homepage</h1>
            <h1>todo: shopping cart (cookie session), login via oAuth? no thats too complex i should instead use a simple logi / register form in mysql it cant be that hard right?</h1><br/><br/>
            <h1>checken of de email / userID overeenkomt met een server-side kant van administratoren die bevoegd zijn. zo niet, laat niet de aanpasknop en delete knop zien, zo wel, toon deze knoppen.</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
