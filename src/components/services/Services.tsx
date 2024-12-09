import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services: React.FC = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing and Prototyping</p>
            </li>
  
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>RESTful API Development</p>
            </li>
            
  
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Graphic Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Content</p>
            </li>

          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services