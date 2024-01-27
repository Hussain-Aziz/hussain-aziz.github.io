import React from 'react';
import CV from '../../assets/Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} 
        target='_blank'
        rel='noopener noreferrer'
        className="btn">
        View Resume
      </a>
    </div>
  );
};

export default CTA;
