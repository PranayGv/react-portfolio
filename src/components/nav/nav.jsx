import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('h')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><BiHomeAlt/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} ><HiOutlineClipboardList/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineProject/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    </nav>
  )
}

export default Nav