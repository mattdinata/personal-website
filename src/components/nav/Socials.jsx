import React, { useState } from 'react'



import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import './Socials.css'

const Socials = () => {

  return (
    <div className="socials__container" >
    
      <div className="nav__socials animate__animated animate__fadeIn animate__slower animate__delay-1s">

        <a href="https://linkedin.com/in/matthewdinata" target="_blank"><FaLinkedin size={20}/>&nbsp;&nbsp;</a>
        <a href="https://github.com/mattdinata" target="_blank">  <FaGithubSquare size={20}/>&nbsp;&nbsp;</a>
        <a href="https://instagram.com/mattdinata" target="_blank">  <FaInstagramSquare size={20}/>&nbsp;&nbsp;</a>
        
      </div>
    </div>
  )
}

export default Socials