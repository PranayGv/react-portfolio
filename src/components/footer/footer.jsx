import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Pranay</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://github.com/PranayGv" ><BsGithub className='footer__logo'/></a>
        <a href="mailto:venkatpranay.ganji@gmail.com" ><SiGmail className='footer__logo'/></a>
        <a href="https://www.instagram.com/pranay_2411/" ><AiFillInstagram  className='footer__logo'/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; PranayGV. All rights reserverd.</small>
      </div>
    </footer>
  )
}

export default footer