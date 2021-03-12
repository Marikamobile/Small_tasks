import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'
import * as FaIcons  from 'react-icons/fa';
function Header() {

    return (
        <nav className={s.nav}>
            <FaIcons.FaBars/>
        <div className={s.item}>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>pre-junior</NavLink>
        </div>
            <div className={s.item}>
            <NavLink to={PATH.JUNIOR} activeClassName={s.active}>junior</NavLink>
        </div>
            <div className={s.item}>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>more than just junior</NavLink>
        </div>
           </nav>

    )
}

export default Header
