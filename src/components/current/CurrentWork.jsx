import React from 'react'
import './current.css'
import { FiActivity, FiCpu, FiGrid, FiTrendingUp, FiZap } from 'react-icons/fi'
import { currentResearch } from '../../data/portfolioData'

const EmbeddedVisual = () => (
  <div className="embedded-visual" aria-hidden="true">
    <svg className="embedded-connections" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M18 25 L32 43" />
      <path d="M14 82 L32 57" />
      <path d="M52 43 L75 33" />
      <path d="M52 57 L73 78" />
    </svg>
    <div className="media-stream media-stream--audio"><span>audio</span><i /><i /><i /><i /><i /><i /></div>
    <div className="edge-device"><FiCpu /><strong>Pi</strong><small>edge</small></div>
    <div className="inference-node"><span>inference</span><strong>ML</strong></div>
    <div className="cloud-node"><span>cloud</span><i /><i /><i /></div>
    <div className="media-stream media-stream--video"><span>video</span><div><i /><i /><i /><i /></div></div>
  </div>
)

const RoutingVisual = () => (
  <div className="router-visual" aria-hidden="true">
    <div className="router-input">Prompt</div><span className="router-line" /><div className="router-core">Select 1</div>
    <div className="router-models"><span>M1</span><span className="is-selected">M2</span><span>M3</span></div>
  </div>
)

const TactileVisual = () => (
  <div className="tactile-visual" aria-hidden="true">
    <div className="tactile-label"><span>visual input</span><span>haptic output</span></div>
    <div className="pin-array">{Array.from({ length: 36 }, (_, index) => <i key={index} />)}</div>
    <div className="tactile-axis"><span>x</span><span>y</span><span>z</span></div>
  </div>
)

const TradingVisual = () => (
  <div className="market-visual" aria-hidden="true"><i /><i /><i /><i /><i /><i /><span /></div>
)

const CudaVisual = () => (
  <div className="cuda-visual" aria-hidden="true">
    <div className="cuda-label"><span>RMSNorm</span><span>kernel / draft</span></div>
    <div className="cuda-grid">{Array.from({ length: 32 }, (_, index) => <i key={index} />)}</div>
    <div className="cuda-flow"><span>CPU</span><i /><span>PyTorch</span><i /><span>CUDA</span></div>
  </div>
)

const visuals = {
  embedded: <EmbeddedVisual />,
  routing: <RoutingVisual />,
  tactile: <TactileVisual />,
  trading: <TradingVisual />,
  cuda: <CudaVisual />,
}

const icons = {
  embedded: <FiCpu />,
  routing: <FiActivity />,
  tactile: <FiGrid />,
  trading: <FiTrendingUp />,
  cuda: <FiZap />,
}

const ResearchCard = ({ item, index }) => (
  <article
    className={`research-card research-card--${item.visual} ${index === 0 ? 'research-card--featured' : ''}`}
    data-reveal
    style={{ '--reveal-delay': `${(index % 2) * 90}ms` }}
  >
    <div className="research-card__copy">
      <div className="research-card__top">
        <span className={`work-status work-status--${item.tone}`}>{item.status}</span>
        {icons[item.visual]}
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.details && <ul className="research-card__details">{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
      <div className="tag-list">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
    </div>
    <div className="research-card__visual">{visuals[item.visual]}</div>
  </article>
)

const CurrentWork = () => (
  <section className="section current-work" id="research">
    <div className="container">
      <div className="section-heading section-heading--split" data-reveal>
        <div><span className="section-index">03 / Current Research &amp; Development</span><h2>Building and researching what comes next.</h2></div>
        <p>Active research and in-progress development across embedded AI, model routing, accessibility, quantitative systems, and GPU computing.</p>
      </div>
      <div className="current-work__grid">
        {currentResearch.map((item, index) => <ResearchCard item={item} index={index} key={item.id} />)}
      </div>
    </div>
  </section>
)

export default CurrentWork
