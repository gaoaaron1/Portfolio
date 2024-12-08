import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'


const IMG1 = require('../../assets/portrait2.png');

const Header: React.FC = () => {
  return (
    <header>
      <div className=".container header__container">
        <h1>Aaron Gao</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={IMG1} alt="Aaron Gao" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header