import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Karol Wrzesiński</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#mario">Game</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/"><AiFillFacebook/></a>
        <a href="https://github.com/KwadratowyMelon"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Karol Wrzesiński. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer