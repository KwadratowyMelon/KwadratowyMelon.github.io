import React from 'react'
import './about.css'
import ME from '../../assets/moje_zdjecie.png'
import {FaAward, FaUsers, FaFolderPlus} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdSchool className="about__icon"/>
              <h5>Education</h5>
              <small>Warsaw University of Technology. Photonics Engineer.</small>
            </article>
            <article className="about__card">
              <FaFolderPlus className="about__icon"/>
              <h5>Projects</h5>
              <small>Multiple projects using various technologies.</small>
            </article>
          </div>
          <p>
            My journey with web development began in 2018, when i made my first pure HTML website as a part of my University course. 
            That inspired me to learn HTML and css as a hobby. Having opportunity to create few websites I tried working with
            WordPress for a while, but quickly returned to coding. Since then I have been learning more CSS/SCSS as well as JavaScript 
            and eventually React. 
          </p>
          <a href="#contact" className="btn btn-primary">Lets's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About