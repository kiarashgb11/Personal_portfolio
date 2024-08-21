import React from 'react';
import './services.css';
import { AiOutlineCheck } from 'react-icons/ai';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Frontend Development */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Developed highly responsive and interactive user interfaces using React, focusing on delivering a seamless user experience across various devices and screen sizes.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Built dynamic single-page applications (SPAs) leveraging React’s component-based architecture, enabling efficient data management and real-time updates within the UI.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Implemented sophisticated state management solutions using React Query, ensuring smooth data retrieval, caching, and synchronization with the server, significantly improving frontend performance.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Enhanced user interaction and visualization by integrating data visualization libraries, transforming complex data into accessible and visually appealing charts and graphs.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Designed and maintained CSS stylesheets, ensuring a consistent and polished visual presentation across all web applications. Employed CSS preprocessors like SASS for more efficient and modular styling.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Collaborated with backend developers to create a seamless API integration, ensuring efficient communication between the frontend and backend, and enhancing the overall application functionality.</p>
            </li>
          </ul>
        </article>
        {/*End of Frontend Development*/}

        {/* Backend Development */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Architected and implemented RESTful APIs, integrating complex business logic and ensuring efficient data flow and user interactions within various applications.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Optimized database queries and data storage strategies by scripting efficient MongoDB operations, which significantly improved the application's performance and scalability.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Engineered search functionality by incorporating Apache Solr, enhancing the system's search capabilities and delivering a more intuitive and faster search experience for users.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Utilized Java and Spring Boot to develop robust backend services, facilitating secure and reliable communication between the frontend and backend, and ensuring the stability of web and mobile applications.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Implemented user authentication and authorization mechanisms to safeguard application data and provide secure access control across different user roles.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Developed and maintained server-side logic, including data processing pipelines, ensuring that backend systems were highly available, scalable, and efficient under load.</p>
            </li>
          </ul>
        </article>
        {/*End of Backend Development*/}

        {/* Machine Learning */}
        <article className="service">
          <div className="service__head">
            <h3>Machine Learning</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Designed and trained deep learning models using PyTorch, leveraging transfer learning techniques to enhance model accuracy in tasks such as image classification and segmentation.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Developed a Skin Cancer Classifier using a combination of U-Net for precise image segmentation and CNNs for feature extraction, achieving an 85% accuracy rate, demonstrating significant potential in real-world diagnostic applications.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Engineered advanced data augmentation pipelines to counteract data insufficiency, ensuring the deep learning models were trained on diverse and representative datasets, improving model robustness.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Utilized TensorFlow and PyTorch to build, train, and evaluate machine learning models, focusing on optimizing hyperparameters and model architectures to achieve superior performance.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Implemented real-time data processing and prediction pipelines, integrating machine learning models into applications for live data analysis and decision-making.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Continuously explored and adopted the latest advancements in machine learning research, ensuring that models and methods employed were state-of-the-art and applicable to real-world problems.</p>
            </li>
          </ul>
        </article>
        {/*End of Machine Learning*/}

      </div>
    </section>
  );
}

export default Services;
