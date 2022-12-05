import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className="main-nav">
      <ul className="nav">
        <li><a href="#">01. home</a></li>
        <li><a href="#education">02. education</a></li>
        <li><a href="#experiences">03. activities</a></li>
        <li><a href="#projects">04. projects</a></li>
        <li>______</li>
      </ul>
    </div>
  )
}

export default Nav