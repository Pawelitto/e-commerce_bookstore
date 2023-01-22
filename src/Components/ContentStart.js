import React from 'react';
import ScrollDownIcon from '../Components/ScrollDownIcon';

import '../Styles/ContentStart.css';
import '../Styles/ScrollDownIcon.css';

import graphic from '../Images/startbookcopy.jpg';

const ContentStart = () => {
  return (
    <div className="startcontentcontainer">
      <div className="titletextbox item-grid">
        <h1>
          Księgarnia <span>online</span>
        </h1>
      </div>
      <div className="graphicbox item-grid">
        <img src={graphic} alt="pepole and books" />
      </div>
      <div className="quotebox item-grid">
        <p>
          „Książka to najlepszy przyjaciel człowieka, a biblioteka to świątynia
          jego myśli.”
        </p>
      </div>
      <div className="authorbox item-grid">
        <p>Cyceron</p>
      </div>

      <div className="scrolldownicondiv item-grid">
        <ScrollDownIcon />
      </div>
    </div>
  );
};

export default ContentStart;
