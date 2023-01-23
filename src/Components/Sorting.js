import React from 'react';

import '../Styles/Sorting.css';

const Sorting = () => {
  return (
    <div className="sortowanie">
      <p>Filtry</p>
      <div className="option-sorting">cena (od najniższej)</div>
      <div className="option-sorting">cena (od najwyższej)</div>
      <div className="option-sorting">tytuł (a - z)</div>
      <div className="option-sorting">tytuł (z - a)</div>
      <div className="option-sorting">opinie (od Najlepszych) </div>
      <div className="option-sorting">opinie (od Najgorszych) </div>
    </div>
  );
};

export default Sorting;
