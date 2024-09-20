import React from 'react';
import './Experiences.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Experiences = () => {
  return (
    <section id='experiences'>
      <div data-aos='zoom-in-up'>
        <h2 style={{ textAlign: 'center' }}>WORK EXPERIENCES</h2>

        <div className='container experiences__container'>
          <div className='experiences__subheading'>
            <h4>Temasek Holdings</h4>
            <h5
              className='date'
              style={{ fontWeight: '500', fontStyle: 'italic' }}
            >
              May 2023 - Aug 2023
            </h5>
          </div>
          <div className='experiences__subtitle'>
            <h5>Full-Stack Developer Intern</h5>
            <h6>Digital Platforms & Services Department</h6>
          </div>
        </div>

        <div className='container experiences__container'>
          <div className='experiences__subheading'>
            <h4>GIC</h4>
            <h5
              className='date'
              style={{ fontWeight: '500', fontStyle: 'italic' }}
            >
              Jul 2023 - Dec 2023
            </h5>
          </div>
          <div className='experiences__subtitle'>
            <h5>Full-Stack Developer Intern</h5>
            <h6>Fixed Income & Multi-Asset Department</h6>
          </div>
        </div>

        <div className='container experiences__container'>
          <div className='experiences__subheading'>
            <h4>Singtel</h4>
            <h5
              className='date'
              style={{ fontWeight: '500', fontStyle: 'italic' }}
            >
              May 2023 - Jul 2023
            </h5>
          </div>
          <div className='experiences__subtitle'>
            <h5>Software Engineer - Management Associate Intern</h5>
            <h6>Mobile Engineering Department</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
