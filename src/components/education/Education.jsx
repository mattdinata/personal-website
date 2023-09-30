import React from 'react';
import './Education.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Education = () => {
  return (
    <section
      id='education'
      data-aos='zoom-in-up'
    >
      <h2>EDUCATION</h2>

      <div
        className='container education__container'
        style={{ paddingBottom: '3rem' }}
      >
        <div className='education__subheading'>
          <h4>Nanyang Technological University</h4>
          <h5
            style={{
              fontWeight: '500',
              fontStyle: 'italic',
              color: 'var(--color-highlight)',
            }}
          >
            Aug 2021 - Present
          </h5>
        </div>
        <div className='education__subheading'>
          <h5>Bachelor of Electrical and Electronic Engineering</h5>
        </div>

        <div className='education__content'>
          <ul>
            <li>ASEAN Undergraduate Scholarship awardee</li>
            <li>2x Dean's List (AY21/22 & AY22/23)</li>

            <li>
              Relevant Modules:
              <br />
              <p
                style={{
                  fontSize: '0.7rem',
                  lineHeight: '1.7',
                  paddingTop: '3px',
                }}
              >
                <i>
                  From Computational Thinking to Programming
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Data Structures &
                  Algorithms &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Introduction
                  to Data Science and Artificial Intelligence
                </i>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className='container education__container'
        style={{ paddingTop: '10rem;' }}
      >
        <div className='education__subheading'>
          <h4>Online Courses & Certifications</h4>
        </div>

        <div className='education__content'>
          <ul>
            <li>
              Build Web Apps with React & Firebase
              <em
                style={{
                  paddingLeft: '1.5rem',
                  fontStyle: 'normal',
                  color: 'var(--color-highlight)',
                }}
              >
                by Shaun Pelling, Udemy
              </em>
            </li>
            <li>
              JavaScript Algorithms and Data Structures
              <em
                style={{
                  paddingLeft: '1.5rem',
                  fontStyle: 'normal',
                  color: 'var(--color-highlight)',
                }}
              >
                by freeCodeCamp
              </em>
            </li>
            <li>
              Responsive Web Design
              <em
                style={{
                  paddingLeft: '1.5rem',
                  fontStyle: 'normal',
                  color: 'var(--color-highlight)',
                }}
              >
                by freeCodeCamp
              </em>
            </li>
            <li>
              Complete Python Bootcamp From Zero to Hero in Python
              <em
                style={{
                  paddingLeft: '1.5rem',
                  fontStyle: 'normal',
                  color: 'var(--color-highlight)',
                }}
              >
                by Jose Portilla, Udemy
              </em>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
