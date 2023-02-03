import React, { useState } from 'react';

import { BsCartPlus, BsCartPlusFill } from 'react-icons/bs';

import '../Styles/ItemCard_row.css';

const ItemCard = ({
  title,
  ratings_count,
  author,
  thumbnail,
  average_rating,
}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="carda">
      <div className="book-img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-author">{author}</div>
      <div className="book-rating">
        Średnia ocena: <b>{average_rating}</b>
      </div>
      <div className="book-footer">
        <span>
          {ratings_count} <b>PLN</b>
        </span>
        <span
          className="iconshop"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {hover ? (
            <BsCartPlusFill class="iconCart" size={20} />
          ) : (
            <BsCartPlus class="iconCart" size={20} />
          )}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
