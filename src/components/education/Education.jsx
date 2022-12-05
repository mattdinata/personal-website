import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section id="education">
      <h2>EDUCATION</h2>

      <div className="container education__container">
        <div className="education__subheading">
          <h4>Nanyang Technological University</h4>
          <h5 style={{fontWeight: "500", fontStyle: "italic"}}>Aug 2021 - Present</h5>
        </div>
        <div className="education__subheading">
          <h5>Bachelor of Electrical and Electronic Engineering</h5>
        </div>

        <div className="education__content">
          <ul>
            <li>CGPA: 4.67/5.00</li>
            <li>Dean's List AY2021/2022</li>
            <li>Relevant Modules:<br/>
              <p style={{fontSize: "0.7rem", lineHeight: "1.7", paddingTop: "3px"}}>
                <i>From Computational Thinking to Programming &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Data Structures & Algorithms &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Introduction to Data Science and Artificial Intelligence</i>
              </p>
            </li>
          </ul>
        </div>
      </div>
      
    </section>
  )
}

export default Education