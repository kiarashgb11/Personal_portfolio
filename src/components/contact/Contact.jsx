import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wcza5ct', 'template_xmnsc1s', form.current, 'czTAFyzV5w7V6m0Xm')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className ="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kiaraashalirezaei@gmail.com</h5>
            <a href="mailto:kiarashalirezaei@gmail.com" target="_blank">Send a Massage</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>647-572-7273</h5>
            <a href="https://api.whatsapp.com/send?phone=+16475727273" target="_blank">Send a Massage</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref = {form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact