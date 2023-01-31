import React from 'react';

import '../Styles/WaveTransition.css';

const ContentStart = () => {
  return (
    <div className="wavebox">
      <div className="textwave">
        <p>
          Posiadamy ponad <span>7</span> tysięcy książek przewiń w dół aby
          znaleźć <span>twoją</span>.
        </p>
      </div>
      <div className="textproducts">
        <span>NOWOŚCI</span> - Najnowsze książki dostępne już teraz
      </div>
      <div className="wavesvg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#FCECFF"
            fill-opacity="0.8"
            d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,101.3C672,85,768,75,864,85.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ContentStart;
