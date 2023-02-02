import React, { useState } from 'react';

import { BsCartPlus, BsCartPlusFill } from 'react-icons/bs';

import '../Styles/ItemCard_col.css';

const ItemCard = ({ title, price, author, thumbnail }) => {
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
      <div className="book-footer">
        <span>{price} USD</span>
        <span
          className="iconshop"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {hover ? <BsCartPlusFill size={20} /> : <BsCartPlus size={20} />}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
