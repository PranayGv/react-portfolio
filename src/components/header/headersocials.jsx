import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'

const headersocials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com/PranayGv" ><BsGithub /></a>
            <a href="mailto:venkatpranay.ganji@gmail.com" ><SiGmail /></a>
            <a href="https://www.instagram.com/pranay_2411/" ><AiFillInstagram /></a>
        </div>
    )
}

export default headersocials