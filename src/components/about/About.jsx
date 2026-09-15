import React from 'react'
import './about.css'
import { FiArrowDownRight } from 'react-icons/fi'

const About = () => (
  <section className="section about" id="about">
    <div className="container">
      <div className="section-heading" data-reveal><span className="section-index">01 / About</span><h2>Engineering depth.<br />Practical range.</h2></div>
      <div className="about__grid">
        <div className="about__lead" data-reveal>
          <p>I’m a University of Toronto Computer Engineering student whose work has moved from application development toward deeper systems and infrastructure engineering.</p>
          <a className="text-link" href="#experience">See the progression <FiArrowDownRight /></a>
        </div>
        <div className="about__details" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <p>My core interests are compiler and runtime systems, AI/ML, distributed systems, security, and computer architecture, the layers where abstractions meet real machines. I enjoy debugging difficult behaviour, reasoning about failure, and turning technical complexity into software people can rely on.</p>
          <p>Beyond the technical work, I care about how engineering connects to people and business. I’m pursuing an Engineering Business minor and enjoy communicating technical ideas, understanding customer and product needs, and translating complex problems into practical solutions. That intersection is why I’m also interested in paths such as solutions engineering and technical consulting, without moving away from hands-on engineering.</p>
          <div className="about__signals">
            <div><span>Primary focus</span><strong>Systems · AI · Distributed Software</strong></div>
            <div><span>Broader perspective</span><strong>Engineering Business · Customers · Technical Strategy</strong></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
