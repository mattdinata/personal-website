import React from 'react'
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import './Socials.css'

const Socials = () => {

  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); 
    }  
  }


  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);

  
  return (
    <div className="socials__container">
    
      <div className="nav__socials animate__animated animate__fadeIn animate__slower animate__delay-1s">

        <div class="theme-switch-wrapper">
          <label class="theme-switch" for="checkbox">
              <input type="checkbox" id="checkbox" />
              <div class="slider round"></div>
          </label>
          <em>mode</em>
        </div>
        <br/>
        <a href="https://linkedin.com/in/matthewdinata" target="_blank"><FaLinkedin size={20}/>&nbsp;&nbsp;</a>
        <a href="https://github.com/mattdinata" target="_blank">  <FaGithubSquare size={20}/>&nbsp;&nbsp;</a>
        <a href="https://instagram.com/mattdinata" target="_blank">  <FaInstagramSquare size={20}/>&nbsp;&nbsp;</a>
        
      </div>
    </div>
  )
}

export default Socials