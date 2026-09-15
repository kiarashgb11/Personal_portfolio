import React from 'react'
import './expertise.css'
import { expertiseGroups } from '../../data/portfolioData'

const Expertise = () => (
  <section className="section expertise" id="expertise">
    <div className="container">
      <div className="section-heading section-heading--split" data-reveal>
        <div><span className="section-index">05 / Expertise</span><h2>Domains, not a logo wall.</h2></div>
        <p>Core engineering domains first, with a smaller layer of tools, business, product, and finance perspective.</p>
      </div>
      <div className="expertise__grid">
        {expertiseGroups.map((group,index) => (
          <article className={`expertise-card ${group.secondary ? 'expertise-card--secondary' : ''}`} key={group.title} data-reveal style={{ '--reveal-delay': `${(index % 3) * 70}ms` }}>
            <div className="expertise-card__number">{group.number}</div>
            <h3>{group.title}</h3><p>{group.description}</p>
            <div className="expertise-card__skills">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Expertise
