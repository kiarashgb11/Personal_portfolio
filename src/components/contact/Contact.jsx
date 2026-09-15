import React, { useRef, useState } from 'react'
import './contact.css'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef(null)
  const [status, setStatus] = useState('idle')

  const sendEmail = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm('service_wcza5ct', 'template_xmnsc1s', form.current, 'czTAFyzV5w7V6m0Xm')
      form.current.reset()
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__content" data-reveal>
            <span className="section-index">08 / Contact</span>
            <h2>Let’s build something that matters.</h2>
            <p>I’m interested in systems, AI infrastructure, distributed and secure software, and technical roles that connect deep engineering with real customer or business problems.</p>
            <div className="contact__links">
              <a href="mailto:kiarashalirezaei@gmail.com"><FiMail /><span><small>Email</small>kiarashalirezaei@gmail.com</span><FiArrowUpRight /></a>
              <a href="https://www.linkedin.com/in/kiarashalirezaei/" target="_blank" rel="noreferrer"><FiLinkedin /><span><small>LinkedIn</small>/in/kiarashalirezaei</span><FiArrowUpRight /></a>
              <a href="https://github.com/kiarashgb11" target="_blank" rel="noreferrer"><FiGithub /><span><small>GitHub</small>@kiarashgb11</span><FiArrowUpRight /></a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact__form" data-reveal style={{ '--reveal-delay': '120ms' }}>
            <div className="form-heading"><span>Send a message</span><span>Replies by email</span></div>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" name="name" placeholder="Your name" autoComplete="name" required />
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" placeholder="Tell me what you're working on..." required />
            <button className="button button--primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'} <FiSend />
            </button>
            <div className="form-status" aria-live="polite">
              {status === 'success' && <span className="is-success">Message sent. I’ll get back to you soon.</span>}
              {status === 'error' && <span className="is-error">Something went wrong. Please email me directly instead.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
