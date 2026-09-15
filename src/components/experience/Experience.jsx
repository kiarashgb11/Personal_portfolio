import React from 'react'
import './experience.css'
import { experiences } from '../../data/portfolioData'

const Experience = () => (
  <section className="section experience" id="experience">
    <div className="container">
      <div className="section-heading section-heading--split" data-reveal>
        <div><span className="section-index">02 / Experience</span><h2>Work at the systems boundary.</h2></div>
        <p>Industry and research experience spanning runtime internals, platform engineering, search systems, and product software.</p>
      </div>
      <div className="experience__timeline">
        {experiences.map((experience,index) => (
          <article className="experience__item" key={experience.company} data-reveal style={{ '--reveal-delay': `${index * 100}ms` }}>
            <div className="experience__rail"><span>{String(index + 1).padStart(2,'0')}</span></div>
            <div className="experience__meta"><span>{experience.period}</span><span>{experience.focus}</span></div>
            <div className="experience__body">
              <p className="experience__company">{experience.company}</p>
              <h3>{experience.role}</h3>
              <p className="experience__summary">{experience.summary}</p>
              <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="tag-list">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
