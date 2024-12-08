import React, { useState, useEffect, useRef } from 'react';
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

  // References for swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const cardContent = [
    {
      text: `
      I am a recent Computer Science graduate from the University of Calgary 
      with a focus on Software Development. I am actively seeking opportunities 
      to apply and expand my technical skills and problem-solving abilities. 
    `,
      image: require('../../assets/portrait3.jpg'),
    },
    {
      text: `
      Experienced Academic Tutor with a demonstrated history of working in 
      the primary/secondary education industry. I have worked with several students 
      from Grade 3 to Grade 12 and taught several subjects ranging from Mathematics, ELA, Social Studies and Science.
    `,
      image: require('../../assets/TutorDoctorLogo.jpg'),
    },
    {
      text: `
      In January 2023, I developed Hungry Caterpillars, an Android arcade game 
      using Java and LibGDX. I designed and rendered interactive tile maps with 
      Tmx files created in Tiled and integrated AdMob to enable in-app advertising for funding. 
      After deploying the game to the Google Play Store, it garnered over 1,000 downloads, 
      reflecting its popularity among users.
    `,
      image: require('../../assets/project2.png'),
    },    
    {
      text: `
      I served as an executive for the Competitive Programming Club from 2023 to 2024, 
      where I played a key role in growing the club's presence and resources. 
      By creating and promoting engaging posters, videos, and social media content, 
      I increased membership attendance by over 20%. Additionally, I collaborated 
      with corporate partners to secure sponsorship opportunities, resulting in a 15% boost in club investments.
    `,
      image: require('../../assets/CPCLogoFinal(Black).png'),
    },
  ];

  // Automatic card change every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardContent.length);
      setAnimationDirection('next'); // Ensure animation direction is 'next' for automatic changes
    }, 10000); // Change card every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleNextCard = () => {
    setAnimationDirection('next');
    setCurrentCard((prev) => (prev + 1) % cardContent.length);
  };

  const handlePrevCard = () => {
    setAnimationDirection('prev');
    setCurrentCard((prev) => (prev - 1 + cardContent.length) % cardContent.length);
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextCard();
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrevCard();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
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
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
  style={{ opacity: 0 }} // Start with invisible state
>
  <CustomScrollbar>
    <div className="about__card-content">
      <div className="about__text-container">
        <p>{cardContent[currentCard].text}</p>
        {currentCard === 0 && (
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        )}
      </div>
      <div className="about__image-container">
        <div className="about__card-photo">
          <img
            src={cardContent[currentCard].image}
            alt={`Card ${currentCard + 1}`}
            onClick={() => handleImageClick(cardContent[currentCard].image)} // Open modal on click
            className="about__photo" // Apply the hover effect class to the image
          />
        </div>
      </div>
    </div>
  </CustomScrollbar>
</div>


          {/* Blue Dot Navigation */}
          <div className="about__dots">
            {cardContent.map((_, index) => (
              <span
                key={index}
                className={`about__dot ${index === currentCard ? 'active' : ''}`}
                onClick={() => {
                  setAnimationDirection(index > currentCard ? 'next' : 'prev');
                  setCurrentCard(index);
                }}
              ></span>
            ))}
          </div>


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
