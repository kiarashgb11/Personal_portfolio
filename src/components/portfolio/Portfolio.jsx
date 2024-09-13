import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/soccerStats.png';
import IMG2 from '../../assets/webDev.jpeg';
import IMG3 from '../../assets/actuator.png';
import IMG4 from '../../assets/pongGame.png';
import IMG5 from '../../assets/fpga.jpeg';
import IMG6 from '../../assets/scrap.avif';
import mapsIMG from '../../assets/Maps.PNG';
import gestureIMG from '../../assets/Gesture.jpg';
import skinCancerIMG from '../../assets/SkinCancer.jpeg';

const data = [
  {
    id: 1,
    image: mapsIMG,
    title: 'TransitHub - Interactive Maps Application',
    link: 'https://github.com/kiarashgb11/TransitHub',
    isGoogleColab: false,
  },
  {
    id: 2,
    image: skinCancerIMG,
    title: 'Skin Cancer Classifier (AI)',
    link: 'https://colab.research.google.com/drive/1-QpGZ_h3io6Ru_r1XQSGvvbvE3AIFTNA?usp=sharing',
    isGoogleColab: true,
  },
  {
    id: 3,
    image: IMG1,
    title: 'Soccer Data and Statistics App',
    link: 'https://github.com/VJalal/SportApp',
    isGoogleColab: false,
  },
  {
    id: 4,
    image: gestureIMG,
    title: 'Gesture Recognition (AI)',
    link: 'https://colab.research.google.com/drive/1tdia-3KiJwDZVjJyPkTS6F3jFk952OJv?usp=sharing',
    isGoogleColab: true,
  },
  {
    id: 5,
    image: IMG2,
    title: 'Portfolio Website',
    link: 'https://github.com/kiarashgb11/Personal_portfolio',
    isGoogleColab: false,
  },
  {
    id: 6,
    image: IMG5,
    title: 'Digital Game System - FPGA Development',
    link: 'https://github.com/kiarashgb11/Digital-Game-System---FPGA-Development',
    isGoogleColab: false,
  },
  {
    id: 7,
    image: IMG6,
    title: 'Smart Web Scrapper & Summarizer',
    link: 'https://github.com/kiarashgb11/Smart-Web-Scrapper-Summarizer',
    isGoogleColab: false,
  },
  {
    id: 8,
    image: IMG3,
    title: 'Actuator Mount 3D Design',
    link: 'https://github.com/kiarashgb11/Actuator_mount_AutoCad',
    isGoogleColab: false,
  },
  {
    id: 9,
    image: IMG4,
    title: 'Pong Game',
    link: 'https://github.com/kiarashgb11/Pong_Game',
    isGoogleColab: false,
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, link, isGoogleColab }) => (
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={link} className='btn' target='_blank' rel="noopener noreferrer">
                {isGoogleColab ? 'Google Colab' : 'Github'}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
