import React from 'react'
import './footer.css'
import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi'
import CV from '../../assets/Kiarash_Resume.pdf'

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <div><a className="footer__brand" href="#home">KA<span>.</span></a><p>Computer Engineer working across systems, AI, distributed infrastructure, security, software, and hardware.</p></div>
      <div className="footer__nav"><span>Navigate</span><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#expertise">Expertise</a><a href="#writing">Writing</a></div>
      <div className="footer__nav"><span>Connect</span><a href="https://github.com/kiarashgb11" target="_blank" rel="noreferrer">GitHub <FiGithub /></a><a href="https://www.linkedin.com/in/kiarashalirezaei/" target="_blank" rel="noreferrer">LinkedIn <FiLinkedin /></a><a href={CV} download>Resume</a></div>
      <a className="footer__top" href="#home" aria-label="Back to top"><FiArrowUp /></a>
    </div>
    <div className="container footer__bottom"><span>© {new Date().getFullYear()} Kiarash Alirezaei</span><span>Designed &amp; built with intention.</span></div>
  </footer>
)

export default Footer
