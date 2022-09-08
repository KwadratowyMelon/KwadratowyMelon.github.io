import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/InterferometrMichelsona.png'
import IMG4 from '../../assets/block_panel.jpg'
import IMG5 from '../../assets/cpp_code_snapshot.png'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Python used in science and engineering',
    github: 'https://github.com/KwadratowyMelon/PwZN'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Bad motivation app',
    github: 'https://github.com/KwadratowyMelon'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Java projects',
    github: 'https://github.com/KwadratowyMelon/Java'
  },
  {
    id: 4,
    image: IMG4,
    title: 'LabView projects',
    github: 'https://github.com/KwadratowyMelon/LabView-G-'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cpp projects',
    github: 'https://github.com/KwadratowyMelon/cpp'
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div> 
                  <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank' rel="noreferrer">github</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio