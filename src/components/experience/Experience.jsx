import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className ="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">


        <h3>Backened Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Assembly</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Verilog</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>MATLAB</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience