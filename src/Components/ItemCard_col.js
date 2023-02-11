import React, { useState } from 'react';

import { BsCartPlus, BsCartPlusFill } from 'react-icons/bs';

import '../Styles/ItemC_row.css';
import '../Styles/ItemCard_col.css';

const ItemCard = ({
  title,
  ratings_count,
  authors,
  thumbnail,
  average_rating,
  mode,
}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={'carda ' + (mode ? 'colmode' : 'rowmode')}>
      <div className="book-img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="book-title">
        <b>{title}</b>
      </div>
      <div className="book-author">{authors}</div>
      <div className="book-rating">
        Średnia ocena: <b>{average_rating}</b>
      </div>
      <div className="book-footer">
        <span className="price">
          {ratings_count} <b>PLN</b>
        </span>
        <span
          className="iconshop"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {hover ? (
            <BsCartPlusFill className="iconCart" size={20} />
          ) : (
            <BsCartPlus className="iconCart" size={20} />
          )}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
