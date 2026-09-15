import React from 'react'
import './portfolio.css'
import { FiArrowUpRight } from 'react-icons/fi'
import { additionalProjects, featuredProjects } from '../../data/portfolioData'

const RaftVisual = () => (
  <div className="raft-visual" aria-label="Diagram of a Raft leader replicating a log to two follower nodes" role="img">
    <div className="raft-grid" />
    <div className="raft-line raft-line--left"><i /><i /><i /></div>
    <div className="raft-line raft-line--right"><i /><i /><i /></div>
    <div className="raft-node raft-node--leader"><span>Leader</span><strong>01</strong><small>term 08</small></div>
    <div className="raft-node raft-node--left"><span>Follower</span><strong>02</strong><small>synced</small></div>
    <div className="raft-node raft-node--right"><span>Follower</span><strong>03</strong><small>synced</small></div>
    <div className="raft-log"><span>replicated log</span><div><i /><i /><i /><i /><i /></div></div>
  </div>
)

const FeaturedProject = ({ project }) => (
  <article className={`featured-project featured-project--${project.id}`} data-reveal>
    <div className="featured-project__content">
      <div className="project-kicker"><span>{project.number}</span>{project.eyebrow}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.metrics && (
        <div className="project-metrics">
          {project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </div>
      )}
      <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      {project.note && <p className="project-note">{project.note}</p>}
      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <FiArrowUpRight /></a>
    </div>
    <div className="featured-project__visual">
      {project.visual === 'raft' ? <RaftVisual /> : <img src={project.image} alt={project.imageAlt} loading="lazy" />}
    </div>
  </article>
)

const Portfolio = () => (
  <section className="section portfolio" id="projects">
    <div className="container">
      <div className="section-heading section-heading--split" data-reveal>
        <div><span className="section-index">03 / Selected work</span><h2>Built to understand how things work.</h2></div>
        <p>Projects across machine learning, distributed correctness, algorithms, product software, and hardware.</p>
      </div>
      <div className="featured-projects">
        {featuredProjects.map((project) => <FeaturedProject project={project} key={project.id} />)}
      </div>
      <div className="projects-subheading" data-reveal><div><span>Archive</span><h3>Additional projects</h3></div><span>{String(additionalProjects.length).padStart(2,'0')} projects</span></div>
      <div className="additional-projects">
        {additionalProjects.map((project,index) => (
          <a className="project-card" href={project.link} target="_blank" rel="noreferrer" key={project.title} data-reveal style={{ '--reveal-delay': `${(index % 3) * 70}ms` }}>
            <div className="project-card__image"><img src={project.image} alt={project.imageAlt} loading="lazy" /><span>{project.type}</span></div>
            <div className="project-card__body"><div className="project-card__title"><h4>{project.title}</h4><FiArrowUpRight /></div><p>{project.description}</p><div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Portfolio
