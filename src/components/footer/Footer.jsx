import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer> 
      <a href="#" className = 'footer__logo'>Kiarash</a>
      <u1 className = 'permalinks'> 
        <li><a href = "#">Home</a></li>
        <li><a href = "#about">about</a></li>
        <li><a href = "#experience">Experience</a></li>
        <li><a href = "#services">Services</a></li>
        <li><a href = "#portfolio">Portfolio</a></li>
        <li><a href = "#contact">Contact</a></li>
      </u1>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/kiarashalirezaei/" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/kiarashgb11" target="_blank"> <AiOutlineGithub /> </a>   
      </div>

      <div className="footer__copyright">
        <small>&copy; Kiarash Portfolio. All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer