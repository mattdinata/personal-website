import React from 'react'
import './Projects.css'

import TUTORGO from '../../assets/tutorgo.png'
import DSAI from '../../assets/dsai.png'
import WALLETWISE from '../../assets/walletwise.jpg'


// PROJECTS ARRAY
const data = [
  {
    id: 1,
    image: TUTORGO,
    title: 'Website Showcase using Bootstrap5',
    info: 'https://github.com/mattdinata/tutorgo-landing-page'
  },
  {
    id: 2,
    image: DSAI,
    title: 'Multiclass Classification in Jupyter Notebook',
    info: 'https://github.com/mattdinata/dsai-classification-project'
  },
  {
    id: 3,
    image: WALLETWISE,
    title: 'Financial Advisor UI/UX in Figma',
    info: 'https://www.figma.com/file/loHk3KY5y7IDbfxkcuQ7Nx/WALLETWISE?node-id=0%3A1&t=jCpIPMpgyohvFLXt-1'
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h2>PAST PROJECTS</h2>

      <div className="container projects__container">

        {
          data.map(({id, image, title, info}) => {
            return (
              <article key={id} className="projects__item">
                <div className="projects__item-image">
                  <img src={image} alt="" />
                </div>
                <h4>{title}</h4>
                <div className="projects__item-cta">
                  <a href={info} className='btn' target="_blank">VIEW</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Projects