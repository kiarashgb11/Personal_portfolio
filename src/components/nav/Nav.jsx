import React, { useEffect, useState } from 'react'
import './nav.css'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { navItems } from '../../data/portfolioData'
import CV from '../../assets/Kiarash_Resume.pdf'

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('header[id], section[id]'))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActiveSection(visible[0].target.id)
    }, { rootMargin: '-25% 0px -60%', threshold: [0,.15,.4] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Kiarash Alirezaei, home"><span>KA</span><span className="brand-dot">.</span></a>
        <div className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => {
            const sectionId = item.href.slice(1)
            const isProjects = sectionId === 'projects' && ['projects','current-work'].includes(activeSection)
            const isActive = activeSection === sectionId || isProjects
            return <a key={item.href} href={item.href} className={isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>{item.label}</a>
          })}
        </div>
        <a className="nav__contact" href={CV} download>Résumé <FiDownload /></a>
        <button className="nav__toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
      </div>
    </nav>
  )
}

export default Nav
