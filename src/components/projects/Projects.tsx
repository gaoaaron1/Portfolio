import React from 'react';
import './Projects.css';
const IMG1 = require('../../assets/project1.png');
const IMG2 = require('../../assets/project2.png');
const IMG3 = require('../../assets/project3.png');

interface ProjectsItem {
  id: number;
  image: string;
  title: string;
  github: string;
  demo: string;
}

// ARRAY OF OBJECTS

const data: ProjectsItem[] = [
  {
    id: 1,
    image: IMG1,
    title: 'Captain Kenyu',
    github: 'https://github.com/gaoaaron1/Captain-Kenyu-Old',
    demo: 'https://play.google.com/store/apps/details?id=com.aaron.game&gl=US'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hungry Caterpillar',
    github: 'https://github.com/gaoaaron1/Captain-Kenyu-Old',
    demo: 'https://play.google.com/store/apps/details?id=com.game.caterpillar&pli=1'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Decidr',
    github: 'https://github.com/gaoaaron1/SENG513-Decidr',
    demo: 'https://www.youtube.com/watch?v=-Esc5BAEuFw'
  }
];

const Projects: React.FC = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='projects__item'>
              <div className="projects__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
