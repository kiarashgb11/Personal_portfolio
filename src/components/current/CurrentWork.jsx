import React from 'react'
import './current.css'
import { FiActivity, FiGrid, FiTrendingUp } from 'react-icons/fi'

const CurrentWork = () => (
  <section className="section current-work" id="current-work">
    <div className="container">
      <div className="section-heading section-heading--split" data-reveal>
        <div><span className="section-index">04 / Current & upcoming work</span><h2>Currently exploring.</h2></div>
        <p>Research directions and planned work are labeled clearly here—separate from completed projects and professional experience.</p>
      </div>
      <div className="current-work__grid">
        <article className="exploration-card exploration-card--routing" data-reveal>
          <div className="exploration-card__top"><span className="work-status work-status--active">Actively researching</span><FiActivity /></div>
          <div className="router-visual" aria-hidden="true">
            <div className="router-input">Request</div><span className="router-line" /><div className="router-core">Router</div>
            <div className="router-models"><span>M1</span><span>M2</span><span>M3</span></div>
          </div>
          <h3>LLM Routing &amp; Model Selection</h3>
          <p>Exploring architectures and learning-based approaches for intelligently routing requests across language models. The research asks how routing systems can balance response quality, latency, throughput, and cost under high request volume.</p>
          <div className="tag-list"><span>LLMs</span><span>Model Routing</span><span>Inference</span><span>Latency</span><span>Cost Optimization</span></div>
        </article>

        <article className="exploration-card exploration-card--trading" data-reveal style={{ '--reveal-delay': '100ms' }}>
          <div className="exploration-card__top"><span className="work-status work-status--planned">Planned · Early-stage</span><FiTrendingUp /></div>
          <div className="market-visual" aria-hidden="true"><i /><i /><i /><i /><i /><i /><span /></div>
          <h3>ML-Powered Trading Agent</h3>
          <p>Planning an ML-driven market analysis agent that combines quantitative indicators, technical analysis, financial data, and machine-learning models to investigate useful signals for short-term decision support.</p>
          <div className="tag-list"><span>Machine Learning</span><span>Python</span><span>Financial Data</span><span>Technical Analysis</span><span>Agents</span></div>
        </article>

        <article className="exploration-card exploration-card--accessibility" data-reveal>
          <div className="accessibility-copy">
            <div className="exploration-card__top"><span className="work-status work-status--upcoming">Upcoming · Research</span><FiGrid /></div>
            <h3>Dynamic Tactile Display for Visual Accessibility</h3>
            <p>Working with a non-profit on an accessibility system that converts digital visual content into a dynamic tactile surface using an array of physical pins. The research focuses on transforming interfaces, websites, images, and diagrams into meaningful 2.5D representations for blind and low-vision users.</p>
            <div className="tag-list"><span>Accessibility</span><span>HCI</span><span>Image Processing</span><span>Assistive Technology</span><span>Python</span><span>Research</span></div>
          </div>
          <div className="tactile-visual" aria-hidden="true">
            <div className="tactile-label"><span>visual input</span><span>tactile surface</span></div>
            <div className="pin-array">{Array.from({ length: 36 }, (_, index) => <i key={index} />)}</div>
            <div className="tactile-axis"><span>x</span><span>y</span><span>z</span></div>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default CurrentWork
