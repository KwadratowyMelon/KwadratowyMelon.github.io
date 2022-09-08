import React from 'react'
import './nav.css'
import {IoIosHome, IoLogoGameControllerB} from 'react-icons/io'
import {FaUser, FaBook, FaPhoneAlt, FaFolderPlus} from 'react-icons/fa'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><IoIosHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaFolderPlus/></a>
      <a href="#mario" onClick={() => setActiveNav('#mario')} className={activeNav === '#mario' ? 'active' : ''}><IoLogoGameControllerB/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FaPhoneAlt/></a>
    </nav>
  )
}

export default Nav