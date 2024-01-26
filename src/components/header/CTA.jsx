import React from 'react';
import CV from '../../assets/Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} 
        target='_blank'
        rel='noopener noreferrer'
        className="btn">
        Download CV
      </a>
    </div>
  );
};

export default CTA;
