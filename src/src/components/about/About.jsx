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
              <small>3+ Years</small>
            </article>
            <article className ='about__card'>
              <BsFolderPlus className ='about__icon'/>
              <h5>Projects</h5>
              <small>15+</small>
            </article>
            <article className ='about__card'>
              <AiOutlineCodeSandbox className ='about__icon'/>
              <h5>Programming Languages</h5>
              <small>10+</small>
            </article>
          </div>

          <p>
          "I am a third-year student at the University of Toronto, majoring in Computer Engineering, with an anticipated graduation date through the PEY co-op program in April 2027. With a strong academic foundation, I have completed coursework in Linear Algebra, Programming Fundamentals, Digital Systems, and Applied Fundamentals of Deep Learning, maintaining a commendable CGPA of 3.5. My experience includes a recent role as a Fullstack Developer intern at Toronto Metropolitan University, where I designed and implemented RESTful APIs, optimized database interactions with MongoDB, and enhanced frontend interfaces using React. Additionally, I have freelanced as a web developer, creating a responsive business website for RENOV8 INC. My programming experience extends to projects like a Deep Learning Skin Cancer Classifier, an Interactive Maps Application, and a Digital Game System using FPGA, all of which demonstrate my proficiency in languages such as Java, Python, and C++. These experiences, combined with my dedication to academic and extracurricular pursuits, have equipped me with a diverse skill set that I am eager to apply in the field of Computer Engineering."
          </p>

          <a href = "#contact" className = 'btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About