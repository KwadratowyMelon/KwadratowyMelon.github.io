import React from 'react'
import CV from '../../assets/cv.pdf'

const links = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn btn-primary">Download CV</a>
        <a href="https://github.com/KwadratowyMelon" className="btn btn-primary">GitHub</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default links