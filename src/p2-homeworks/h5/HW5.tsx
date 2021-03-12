import React from 'react'
import Header from './Header1'
import Routes from './Routes'
import { HashRouter } from 'react-router-dom'
type HW5PropsType ={
    className: string
}
function HW5(props: HW5PropsType) {
    return (
        <div className={props.className}>
            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
