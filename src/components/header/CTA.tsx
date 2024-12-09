import React from 'react';
const CV = require('../../assets/AaronResume.pdf');


const CTA: React.FC = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>
          Download CV
        </a>
        <a href="#contact" className='btn btn-primary'>
          Let's Talk</a>
    </div>
  );
};

export default CTA