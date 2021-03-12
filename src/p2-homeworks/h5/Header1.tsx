import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import * as FaIcons from 'react-icons/all';
import {IconContext} from "react-icons";
import {IconBaseProps} from "react-icons";
import './Header1.css'

function Header1() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (<div className='navbar'>
            <IconContext.Provider value={{color:'#fff'}}>
                <NavLink to={'#'} className={'menu-bars'}> <FaIcons.FaBars onClick={showSidebar}/></NavLink>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <NavLink to='#' className="menu-bars"><FaIcons.AiOutlineClose/> </NavLink>
                        </li>
                        <li className='nav-text'>
                            <NavLink to={PATH.PRE_JUNIOR}
                                     className='nav-text-navlink'>pre-junior</NavLink>
                        </li>
                        <li className='nav-text'>
                            <NavLink to={PATH.JUNIOR}
                                     className='nav-text-navlink'>junior</NavLink>
                        </li>
                        <li className='nav-text'>
                            <NavLink to={PATH.JUNIOR_PLUS}
                                     className='nav-text-navlink'>more than just junior</NavLink>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>

    )
}

export default Header1
