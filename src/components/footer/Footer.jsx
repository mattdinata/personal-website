import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <p className="footer__logo">MATTHEW DINATA</p>

      <ul className="permalinks">
        <li><a href="/#">01. home</a></li>
        <li><a href="#education">02. education</a></li>
        <li><a href="#experiences">03. activities</a></li>
        <li><a href="#projects">04. projects</a></li>
      </ul>


    </footer>
  )
}

export default Footer