import React from 'react'
import './about.css'
import ME from '../../assets/unnamed.jpg'
import {BsAward} from 'react-icons/bs'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {BsFolderPlus} from 'react-icons/bs'
const About = () => {
  return (
    <section id ='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src = {ME} alr="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className ='about__card'>
              <BsAward className ='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className ='about__card'>
              <BsFolderPlus className ='about__icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
            <article className ='about__card'>
              <AiOutlineCodeSandbox className ='about__icon'/>
              <h5>Programming Languages</h5>
              <small>7+</small>
            </article>
          </div>

          <p>
          "I am a second-year student at the University of Toronto, majoring in computer engineering, with an anticipated graduation date through the PEY co-op program in April 2027. Sporting a commendable CGPA of 3.5, I excel both in academics and extracurricular undertakings. My previous role as a computer science club co-leader in high school equipped me with valuable project management and collaboration skills. Additionally, I've dedicated over three years to tutoring, imparting knowledge in programming and mathematics. Beyond my academic pursuits, I have several programming experiences, including the development of an app that imports soccer statistics using APIs, the creation of this portfolio website, and 3D modeling for the design of actuator mounts used for prosthetic limbs at the University of Toronto's Robotics Institute. These self-initiated projects have further enriched my skill set, making me well-prepared to contribute to the world of computer engineering"
          </p>

          <a href = "#contact" className = 'btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About