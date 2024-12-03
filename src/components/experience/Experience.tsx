import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience: React.FC = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className="experience__details-content">
                <h4 className="experience__details-text">HTML</h4> {/* Add class here */}
                <div className='experience__bar'>
                  <div className='experience__bar-fill intermediate'></div> {/* Skill level */}
                </div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className="experience__details-content">
                <h4 className="experience__details-text">CSS</h4> {/* Add class here */}
                <div className='experience__bar'>
                  <div className='experience__bar-fill intermediate'></div> {/* Skill level */}
                </div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className="experience__details-content">
                <h4 className="experience__details-text">JavaScript</h4> {/* Add class here */}
                <div className='experience__bar'>
                  <div className='experience__bar-fill experienced'></div> {/* Skill level */}
                </div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className="experience__details-content">
                <h4 className="experience__details-text">React</h4> {/* Add class here */}
                <div className='experience__bar'>
                  <div className='experience__bar-fill experienced'></div> {/* Skill level */}
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className="experience__details-content">
                <h4 className="experience__details-text">Node JS</h4> {/* Add class here */}
                <div className='experience__bar'>
                  <div className='experience__bar-fill basic'></div> {/* Skill level */}
                </div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className="experience__details-content">
                <h4 className="experience__details-text">PHP</h4> {/* Add class here */}
                <div className='experience__bar'>
                  <div className='experience__bar-fill basic'></div> {/* Skill level */}
                </div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className="experience__details-content">
                <h4 className="experience__details-text">MySQL</h4> {/* Add class here */}
                <div className='experience__bar'>
                  <div className='experience__bar-fill basic'></div> {/* Skill level */}
                </div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className="experience__details-content">
                <h4 className="experience__details-text">Python</h4> {/* Add class here */}
                <div className='experience__bar'>
                  <div className='experience__bar-fill experienced'></div> {/* Skill level */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
