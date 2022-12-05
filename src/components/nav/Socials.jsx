import React from 'react'
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import './Socials.css'

const Socials = () => {
  return (
    <div className="nav__socials">
      <a href="https://linkedin.com/in/matthewdinata" target="_blank"><FaLinkedin size={20}/>&nbsp;&nbsp;</a>
      <a href="https://github.com/mattdinata" target="_blank">  <FaGithubSquare size={20}/>&nbsp;&nbsp;</a>
      <a href="https://instagram.com/mattdinata" target="_blank">  <FaInstagramSquare size={20}/>&nbsp;&nbsp;</a>
      
    </div>
  )
}

export default Socials