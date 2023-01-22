import React from 'react';

import '../Styles/WaveTransition.css';

const ContentStart = () => {
  return (
    <div className="wavebox">
      <div className="textwave">
        <p>
          Posiadamy ponad 7 tysięcy książek przewiń w dół aby znaleźć{' '}
          <span>twoją</span>.
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FCECFF"
          fill-opacity="1"
          d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default ContentStart;
