import React from 'react'
import './education.css'
import { coursework } from '../../data/portfolioData'

const Education = () => (
  <section className="section education" id="education">
    <div className="container education__panel" data-reveal>
      <div className="education__intro"><span className="section-index">07 / Education</span><p>2022 — 2027</p><strong>Toronto, Canada</strong></div>
      <div className="education__main">
        <p>University of Toronto</p><h2>Bachelor of Applied Science<br />Computer Engineering</h2>
        <div className="education__credentials"><span>Minor in Artificial Intelligence Engineering</span><span>Minor in Engineering Business</span><span>Certificate in Cybersecurity</span></div>
      </div>
      <div className="education__details">
        <div className="education__gpa"><span>GPA</span><strong>3.74<span>/4.0</span></strong></div>
        <div><span className="detail-label">Selected coursework</span><div className="coursework">{coursework.map((course) => <span key={course}>{course}</span>)}</div></div>
      </div>
    </div>
  </section>
)

export default Education
