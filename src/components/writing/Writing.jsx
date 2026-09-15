import React from 'react'
import './writing.css'
import { FiArrowUpRight, FiEdit3 } from 'react-icons/fi'
import { writing } from '../../data/portfolioData'

const Writing = () => (
  <section className="section writing" id="writing">
    <div className="container">
      <div className="section-heading section-heading--split" data-reveal>
        <div><span className="section-index">06 / Technical writing</span><h2>Make the complex usable.</h2></div>
        <p>Published engineering notes on Python, packaging, and operational tooling for z/OS.</p>
      </div>
      <div className="writing__list">
        {writing.map((article,index) => (
          <a href={article.link} target="_blank" rel="noreferrer" className="writing-card" key={article.title} data-reveal style={{ '--reveal-delay': `${index * 70}ms` }}>
            <div className="writing-card__icon"><FiEdit3 /></div>
            <div><span>{article.meta}</span><h3>{article.title}</h3><p>{article.description}</p></div>
            <FiArrowUpRight className="writing-card__arrow" />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Writing
