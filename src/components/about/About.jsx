import React from 'react'
import { useEffect } from 'react'
import './About.css'

const About = () => {

  useEffect(() => {
    require("../../utils/slide.js")
  }, []);

  return (
    <header>
      <div className="title-text animate__animated animate__slideInDown">
        <div className="wrap">
          <div className="line animate__animated animate__slideInDown animate__slower">
            <div className="left">
              <div className="content">
                <span className="spanSlow">Matthew</span>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <span className="spanSlow">Matthew</span>
              </div>
            </div>
          </div>
          <div className="line animate__animated animate__slideInDown animate__slow">
            <div className="left">
              <div className="content">
                <span className="spanSlow">Dinata</span>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <span className="spanSlow">Dinata</span>
              </div>
            </div>
          </div>
          <div className="line animate__animated animate__slideInDown animate__fast">
            <div className="left">
              <div className="content">
                <span className="spanFast">Learner</span>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <span className="spanFast">Learner</span>
              </div>
            </div>
          </div>
          <div className="line animate__animated animate__slideInDown animate__faster">
            <div className="left">
              <div className="content">
                <span className="spanSlow">Developer</span>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <span className="spanSlow">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </header>



    
  )
}

export default About