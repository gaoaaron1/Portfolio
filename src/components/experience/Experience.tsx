import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import Companies from './Companies';  // Import the new Companies component

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        
        {/* Frontend Skills Section */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">HTML</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill intermediate"></div>
                </div>
                <span className="experience__tooltip">Intermediate</span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">CSS</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill intermediate"></div>
                </div>
                <span className="experience__tooltip">Intermediate</span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">JavaScript</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill experienced"></div>
                </div>
                <span className="experience__tooltip">Experienced</span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">React</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill experienced"></div>
                </div>
                <span className="experience__tooltip">Experienced</span>
              </div>
            </article>
          </div>
        </div>

        {/* Backend Skills Section */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">Node JS</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill basic"></div>
                </div>
                <span className="experience__tooltip">Basic</span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">PHP</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill basic"></div>
                </div>
                <span className="experience__tooltip">Basic</span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">MySQL</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill basic"></div>
                </div>
                <span className="experience__tooltip">Basic</span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">Python</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill intermediate"></div>
                </div>
                <span className="experience__tooltip">Intermediate</span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">.NET</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill experienced"></div>
                </div>
                <span className="experience__tooltip">Experienced</span>
              </div>
            </article>    
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">MongoDB</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill intermediate"></div>
                </div>
                <span className="experience__tooltip">Intermediate</span>
              </div>
            </article>   
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4 className="experience__details-text">Java</h4>
                <div className="experience__bar">
                  <div className="experience__bar-fill experienced"></div>
                </div>
                <span className="experience__tooltip">Experienced</span>
              </div>
            </article>                               
          </div>
        </div>
      </div>

      
      {/* Timeline Section */}
      <Companies /> 
    </section>
  );
};

export default Experience;
