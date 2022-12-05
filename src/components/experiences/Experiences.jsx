import React from 'react'
import './Experiences.css'

const Experiences = () => {
  return (
    <section id="experiences">
      <h2>ACTIVITIES</h2>

      <div className="container experiences__container">
        <div className="experiences__subheading">
          <h4>PINTU IT</h4>
          <h5 style={{fontWeight: "500", fontStyle: "italic"}}>Oct 2022 - Present</h5>
        </div>
        <div className="experiences__subheading">
          <h5>Technology Committee</h5>
        </div>
      </div>

      <div className="container experiences__container">
        <div className="experiences__subheading">
          <h4>EEE Club</h4>
          <h5 style={{fontWeight: "500", fontStyle: "italic"}}>Sep 2022 - Present</h5>
        </div>
        <div className="experiences__subheading">
          <h5>Student Life Director</h5>
        </div>
      </div>

      <div className="container experiences__container">
        <div className="experiences__subheading">
          <h4>PINTU Creative Media</h4>
          <h5 style={{fontWeight: "500", fontStyle: "italic"}}>Oct 2021 - Oct 2022</h5>
        </div>
        <div className="experiences__subheading">
          <h5>UI/UX Committee</h5>
        </div>
      </div>
      
    </section>
  )
}

export default Experiences