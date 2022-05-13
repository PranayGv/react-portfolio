import React from 'react'
import './header.css'
import Headersocials from './headersocials'

const header = () => {
    return (
        <header>
            <div className="header__container">
                <h5>Hello World, I am</h5>
                <h1>Pranay GV</h1>
                <h4 className="textlight">Software Developer</h4>
                <Headersocials/>
            </div>
        </header>
    )
}

export default header