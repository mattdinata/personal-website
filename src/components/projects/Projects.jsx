import React from 'react';
import './Projects.css';

import SNAPSYNCH from '../../assets/snapsynch.jpg';
import GOODCAUSE from '../../assets/goodcause.png';
import TWEEDLE from '../../assets/tweedle.jpeg';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// PROJECTS ARRAY
const data = [
  {
    id: 1,
    image: SNAPSYNCH,
    title: 'SnapSynch: Transform Any Video into Highlights with Ease',
    info: 'https://devpost.com/software/snapsynch',
  },
  {
    id: 2,
    image: GOODCAUSE,
    title:
      'GoodCause: All-in-one Solution to Drug Abuse, Vaping, and Cyberbullying',
    info: 'https://github.com/matthewdinata/dip-ui',
  },
  {
    id: 3,
    image: TWEEDLE,
    title: 'Tweedle: Full-Stack Social Media Web Application',
    info: 'https://github.com/matthewdinata/tweedle-app',
  },
];

const Projects = () => {
  return (
    <section
      id='projects'
      data-aos='zoom-in-up'
    >
      <h2>PAST PROJECTS</h2>

      <div
        className='container projects__container'
        data-aos='flip-up'
        data-aos-delay='300'
        data-aos-duration='500'
      >
        {data.map(({ id, image, title, info }) => {
          return (
            <article
              key={id}
              className='projects__item'
            >
              <div className='projects__item-image'>
                <img
                  src={image}
                  alt=''
                />
              </div>
              <h4>{title}</h4>
              <div className='projects__item-cta'>
                <a
                  href={info}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  VIEW
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
