import React from 'react'
import './header.css'
import Links from './links'

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Karol Wrzesiński</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Links/>
        <a href="#contact" className="scroll_down">Scroll down</a>
      </div>
    </header>
  )
}

export default Header