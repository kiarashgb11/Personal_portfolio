import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id ='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className = "service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <p className='service__list'>
            <li>
              <AiOutlineCheck className ='service__list-icon'/>
              <p>Proficient in web development, with a demonstrated track record including the creation of this personal portfolio website.</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Strong command of core web technologies, including JavaScript, HTML, and CSS, enabling the development of interactive and visually appealing web applications.</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Experienced in React, a popular JavaScript library for building user interfaces, facilitating the development of dynamic and responsive web solutions.</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Familiar with version control systems like Git, ensuring efficient collaboration and code management in web development projects.</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Committed to staying updated with the latest web development trends and technologies, ensuring the delivery of cutting-edge solutions.</p>
            </li>
          </p>
        </article>
        {/*End of Web Development*/}
        <article className = "service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>

          <p className='service__list'>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Proficient in app development with hands-on experience in creating the Soccer Stats app, providing detailed statistics for soccer teams and players in Europe's top 3 leagues.</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Skilled in React Native, a versatile framework for building cross-platform mobile applications, ensuring a seamless and efficient user experience on both iOS and Android.</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Utilize JSS (JavaScript Stylesheets) to maintain well-structured and maintainable code while styling the app for a visually appealing and consistent look.</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Committed to continuous learning and staying updated with the latest advancements in app development to deliver innovative and user-centric solutions.</p>
            </li>
          </p>
        </article>
      {/*End of App Development*/}
        <article className = "service">
          <div className="service__head">
            <h3>3D Modelling</h3>
          </div>

          <p className='service__list'>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Proficient in advanced 3D modeling software, including AutoCAD and SketchUp, with a knack for creating intricate and visually captivating designs.</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Demonstrated expertise in precise and detailed 3D design work, encompassing projects ranging from actuator mounts for University of Toronto's Robotics Institute to full kitchen layouts for renovation endeavors.</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>LAdept at transforming creative concepts into tangible 3D models, highlighting a strong aptitude for translating ideas into visually impressive designs.</p>
            </li>
          </p>
        </article>
      {/*End of  3D Modelling*/}
      </div>
    </section>
  )
}

export default Services