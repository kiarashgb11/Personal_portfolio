import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/soccerStats.png'
import IMG2 from '../../assets/webDev.jpeg'
import IMG3 from '../../assets/actuator.png'
import IMG4 from '../../assets/pongGame.png'
import IMG5 from '../../assets/fpga.jpeg'
import IMG6 from '../../assets/scrap.avif'
//put github links for githubs
//and live demo for the second link

//This is for under Github
//<a href={demo} className='btn btn-ptrimary' target='_blanks'>Live Demo</a>
const data = [
  {
    id: 1,
    image: IMG1, 
    title: 'Soccer Data and Statistics App',
    github: 'https://github.com/VJalal/SportApp',

  },
  {
    id: 2,
    image: IMG2, 
    title: 'Portfolio Website',
    github: 'https://github.com/kiarashgb11/Personal_portfolio',

    
  },
  {
    id: 3,
    image: IMG5, 
    title: 'Digital Game System - FPGA Development',
    github: 'https://github.com/kiarashgb11/Digital-Game-System---FPGA-Development',

    
  },
  {
    id: 4,
    image: IMG6, 
    title: 'Smart Web Scrapper & Summarizer',
    github: 'https://github.com/kiarashgb11/Smart-Web-Scrapper-Summarizer',

    
  },

  {
    id: 5,
    image: IMG3, 
    title: 'Actuator Mount 3D Design',
    github: 'https://github.com/kiarashgb11/Actuator_mount_AutoCad',

  },
  {
    id: 6,
    image: IMG4, 
    title: 'Pong Game',
    github: 'https://github.com/kiarashgb11/Pong_Game',

    
  }
]

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className = "container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blanks'>Github</a>
              
              </div>
              
              </article>
                
            )
          })
        }
      </div>
      
      
    </section>
  )
}

export default Portfolio