import React from 'react'
import './Experiences.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Experiences = () => {
  return (
    <section id="experiences">
      <div data-aos="zoom-in-up">
      <h2 style={{textAlign: 'center'}}>ACTIVITIES</h2>


      <div className="container experiences__container">
        <div className="experiences__subheading">
          <h4>PINTU IT</h4>
          <h5 className="date" style={{fontWeight: "500", fontStyle: "italic"}}>Oct 2022 - Present</h5>
        </div>
        <div className="experiences__subheading">
          <h5>Technology Committee</h5>
        </div>
      </div>

      <div className="container experiences__container">
        <div className="experiences__subheading">
          <h4>EEE Club</h4>
          <h5 className="date" style={{fontWeight: "500", fontStyle: "italic"}}>Sep 2022 - Present</h5>
        </div>
        <div className="experiences__subheading">
          <h5>Student Life Director</h5>
        </div>
      </div>

      <div className="container experiences__container">
        <div className="experiences__subheading">
          <h4>PINTU Creative Media</h4>
          <h5 className="date" style={{fontWeight: "500", fontStyle: "italic"}}>Oct 2021 - Oct 2022</h5>
        </div>
        <div className="experiences__subheading">
          <h5>UI/UX Committee</h5>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experiences