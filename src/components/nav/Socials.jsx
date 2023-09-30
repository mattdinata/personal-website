import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import './Socials.css'

const Socials = () => {

  return (
    <div className="socials__container" >
    
      <div className="nav__socials animate__animated animate__fadeIn animate__slower animate__delay-1s">

        <a href="https://linkedin.com/in/matthewdinata" target="_blank" rel="noreferrer"><FaLinkedin size={20}/>&nbsp;&nbsp;</a>
        <a href="https://github.com/matthewdinata" target="_blank" rel="noreferrer">  <FaGithubSquare size={20}/>&nbsp;&nbsp;</a>
        <a href="https://instagram.com/mattdinata" target="_blank" rel="noreferrer">  <FaInstagramSquare size={20}/>&nbsp;&nbsp;</a>
        
      </div>
    </div>
  )
}

export default Socials