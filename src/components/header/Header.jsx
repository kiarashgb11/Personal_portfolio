import React from 'react'
import './header.css'
import ME from '../../assets/me2.png'
import CV from '../../assets/Kiarash_Resume.pdf'
import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'

const SystemMap = () => (
  <div className="system-map" aria-hidden="true">
    <svg viewBox="0 0 560 360" role="presentation">
      <defs>
        <linearGradient id="lineGradient" x1="0" x2="1">
          <stop offset="0" stopColor="#62a8ff" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#62a8ff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#9b8cff" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path className="map-path" d="M280 180 L112 72" />
      <path className="map-path" d="M280 180 L448 72" />
      <path className="map-path" d="M280 180 L92 180" />
      <path className="map-path" d="M280 180 L468 180" />
      <path className="map-path" d="M280 180 L112 288" />
      <path className="map-path" d="M280 180 L448 288" />
      <circle className="signal signal-one" cx="0" cy="0" r="4" />
      <circle className="signal signal-two" cx="0" cy="0" r="4" />
      <circle className="signal signal-three" cx="0" cy="0" r="4" />
    </svg>
    <div className="map-node node-systems"><span>01</span><strong>Systems & Compilers</strong><small>CPython · POSIX · C</small></div>
    <div className="map-node node-distributed"><span>02</span><strong>Distributed Systems</strong><small>Raft · Concurrency</small></div>
    <div className="map-node node-security"><span>03</span><strong>Security</strong><small>Analysis · Crypto</small></div>
    <div className="map-node node-software"><span>04</span><strong>Software</strong><small>Backend · APIs</small></div>
    <div className="map-node node-ai"><span>05</span><strong>AI / ML</strong><small>Deep Learning · CV</small></div>
    <div className="map-node node-hardware"><span>06</span><strong>Hardware</strong><small>FPGA · Verilog</small></div>
    <div className="map-core"><span className="core-ring" /><span className="core-ring core-ring-two" /><strong>KA</strong></div>
    <div className="map-status"><span /> engineering across layers</div>
  </div>
)

const Header = () => {
  return (
    <header className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content" data-reveal>
          <div className="hero__eyebrow"><span className="status-dot" />University of Toronto · Computer Engineering · Class of 2027</div>
          <p className="hero__name">Kiarash Alirezaei</p>
          <h1>Engineering across <span>systems, AI, security,</span> and distributed infrastructure.</h1>
          <p className="hero__description">
            Computer Engineering student with experience ranging from CPython internals and
            fault-tolerant systems to machine learning, secure software, backend development,
            and hardware—grounded in how software interacts with real infrastructure.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">View projects <FiArrowDownRight /></a>
            <a className="button button--accent" href={CV} download><FiDownload /> Download résumé</a>
            <a className="button button--secondary" href="#experience">Experience</a>
            <a className="icon-button" href="https://github.com/kiarashgb11" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FiGithub /></a>
            <a className="icon-button" href="https://www.linkedin.com/in/kiarashalirezaei/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FiLinkedin /></a>
          </div>
          <div className="hero__meta">
            <div><span>Recent experience</span><strong>Compiler Developer Intern @ IBM</strong></div>
            <div><span>Education</span><strong>BASc Computer Engineering · 2027</strong></div>
          </div>
        </div>
        <div className="hero__visual" data-reveal style={{ '--reveal-delay': '140ms' }}>
          <div className="visual-label"><span>Engineering map</span><span>2026.09</span></div>
          <SystemMap />
          <div className="portrait-chip">
            <img src={ME} alt="Kiarash Alirezaei" />
            <div><strong>Kiarash Alirezaei</strong><span>Computer Engineer</span></div>
          </div>
          <a className="visual-link" href="#about" aria-label="Continue to about section">Explore <FiArrowUpRight /></a>
        </div>
      </div>
    </header>
  )
}

export default Header
