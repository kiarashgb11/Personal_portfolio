import React, { useEffect, useRef } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import CurrentWork from './components/current/CurrentWork'
import Expertise from './components/expertise/Expertise'
import Writing from './components/writing/Writing'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import useScrollReveal from './hooks/useScrollReveal'

const App = () => {
  const shellRef = useRef(null)

  useScrollReveal()

  useEffect(() => {
    const shell = shellRef.current
    if (!shell || window.matchMedia('(pointer: coarse)').matches) return undefined

    let frame
    const handlePointerMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        shell.style.setProperty('--pointer-x', `${event.clientX}px`)
        shell.style.setProperty('--pointer-y', `${event.clientY}px`)
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  useEffect(() => {
    if (!window.location.hash) return
    const target = document.querySelector(window.location.hash)
    if (target) requestAnimationFrame(() => target.scrollIntoView())
  }, [])

  return (
    <div className="site-shell" ref={shellRef}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="ambient-grid" aria-hidden="true" />
      <div className="pointer-glow" aria-hidden="true" />
      <Nav />
      <main id="main-content">
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <CurrentWork />
        <Expertise />
        <Writing />
        <Education />
        <Contact />
      </main>
        <Footer />
    </div>
  )
}

export default App
