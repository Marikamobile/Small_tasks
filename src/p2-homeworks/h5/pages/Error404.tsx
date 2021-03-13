import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "../Routes";
import './Error404.css'

function Error404() {
    return (
        <div className='error-container'>
            <div className='content'>
                <h2>Oops! Page not found.</h2>
                <h1>404</h1>
                <p>We can't find page you are looking for.</p>
                <NavLink to={PATH.PRE_JUNIOR}
                         className='error-text-navlink'>Go back to pre-junior</NavLink>

                <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            </div>
        </div>
    )
}

export default Error404
