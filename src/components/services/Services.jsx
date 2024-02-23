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
        <article className="service">
  <div className="service__head">
    <h3>App Development & Technical Integration</h3>
  </div>

  <ul className='service__list'> {/* Still recommend <ul> for semantic correctness */}
    <li>
      <AiOutlineCheck className='service__list-icon'/>
      <p>Proficient in app development with hands-on experience in creating the Soccer Stats app, providing detailed statistics for 60+ soccer teams and 1500+ players in Europe's top 3 leagues.</p>
    </li>
    <li>
      <AiOutlineCheck className='service__list-icon'/>
      <p>Skilled in React Native, a versatile framework for building cross-platform mobile applications, ensuring a seamless and efficient user experience on both iOS and Android.</p>
    </li>
    <li>
      <AiOutlineCheck className='service__list-icon'/>
      <p>Utilize JSS (JavaScript Stylesheets) to maintain well-structured and maintainable code while styling the app for a visually appealing and consistent look.</p>
    </li>
    <li>
      <AiOutlineCheck className='service__list-icon'/>
      <p>Expanded expertise into backend technologies with a focus on database management using Django, enhancing app functionality and user engagement through efficient data handling and API integration.</p>
    </li>
    <li>
      <AiOutlineCheck className='service__list-icon'/>
      <p>Currently leading the development of an Interactive Maps Application for a university project. This involves integrating C++ and the STL library for optimized performance, managing API calls for real-time data processing, and collaborating on UI/UX design for intuitive navigation and aesthetic appeal.</p>
    </li>
    <li>
      <AiOutlineCheck className='service__list-icon'/>
      <p>Committed to continuous learning and staying updated with the latest advancements in app development to deliver innovative and user-centric solutions.</p>
    </li>
  </ul>
</article>

      {/*End of App Development*/}
      <article className="service">
  <div className="service__head">
    <h3>Data Analytics</h3>
  </div>

  <ul className='service__list'> {/* Updated to <ul> for proper list structure */}
    <li>
      <AiOutlineCheck className='service__list-icon'/>
      <p>Experienced in creating advanced web scrapers using Python, facilitating the extraction of valuable information and summarization of discussions and reports from a company's GitHub community. This skill has been pivotal in deriving insights and supporting data-driven decision-making.</p>
    </li>
    <li>
      <AiOutlineCheck className='service__list-icon'/>
      <p>Proficient in database management using SQL, capable of designing, implementing, and maintaining efficient databases. My work includes optimizing data storage, retrieval, and manipulation processes, enabling sophisticated data analysis and reporting.</p>
    </li>
    <li>
      <AiOutlineCheck className='service__list-icon'/>
      <p>Committed to leveraging analytical skills to transform complex datasets into actionable insights, thus enhancing business intelligence and operational strategies.</p>
    </li>
  </ul>
</article>

      {/*End of  3D Modelling*/}
      </div>
    </section>
  )
}

export default Services