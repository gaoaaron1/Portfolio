import React, { useState } from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import CustomScrollbar from './CustomScrollbar';
import './About.css';

const About: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<'next' | 'prev'>('next');
  const [modalOpen, setModalOpen] = useState(false);  // State for modal visibility
  const [modalImage, setModalImage] = useState('');    // State to store clicked image

  const cardContent = [
    {
      text: "I am a recent Computer Science graduate from the University of Calgary with a focus on Software Development. I am actively seeking opportunities to apply and expand my technical skills and problem-solving abilities.",
      image: require('../../assets/portrait3.jpg'),
    },
    {
      text: "Experienced Academic Tutor with a demonstrated history of working in the primary/secondary education industry. Skilled in Mobile/Web Front-end and Back-end Development. Strong education professional with a Bachelor of Science - BS focused in Computer Science from University of Calgary.\n\nI have demonstrated leadership both in tutoring and in my internship. I have managed the software development team and directed my colleagues on version control such as Github, created various content videos, and directed the database project.",
      image: require('../../assets/project2.png'),
    },
    {
      text: "Proficient in various programming languages and web technologies, with hands-on experience in creating dynamic applications. Adept at problem-solving, critical thinking, and collaborating in agile environments. Looking to leverage my skills and knowledge to contribute to innovative projects and team success.\n\nI am excited to join your team and create a positive impact with my skill set!",
      image: require('../../assets/project3.png'),
    },
  ];

  const handleNextCard = () => {
    setAnimationDirection('next');
    setCurrentCard((prev) => (prev + 1) % cardContent.length);
  };

  const handlePrevCard = () => {
    setAnimationDirection('prev');
    setCurrentCard((prev) => (prev - 1 + cardContent.length) % cardContent.length);
  };

  const handleImageClick = (image: string) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <div
            className={`about__container2 ${animationDirection === 'prev' ? 'prev-card' : ''}`}
            key={currentCard}
          >
            <CustomScrollbar>
              <div className="about__card-photo">
                <img
                  src={cardContent[currentCard].image}
                  alt={`Card ${currentCard + 1}`}
                  onClick={() => handleImageClick(cardContent[currentCard].image)} // Open modal on click
                  className="about__photo" // Add class for hover effect
                />
              </div>
              <div className="about__text-container">
                <p>{cardContent[currentCard].text}</p>
              </div>
            </CustomScrollbar>
          </div>

          <div className="about__arrows">
            <button onClick={handlePrevCard} className="about__arrow-left">
              &#10094;
            </button>
            <button onClick={handleNextCard} className="about__arrow-right">
              &#10095;
            </button>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Modal View" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>
              &#10006; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
