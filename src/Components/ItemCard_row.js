import React, { useState } from 'react';

import { BsCartPlus, BsCartPlusFill } from 'react-icons/bs';

import '../Styles/ItemCard_col.css';

const ItemCardRow = ({ title, price, author, cover, pages }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div className="carda">
        <div className="book-img">
          <img src={cover} alt={title} />
        </div>
        <div className="book-info">
          <span className="book-title">{title}</span>
          <span className="book-author">{author}</span>
          <span className="book-rating">{pages}</span>
        </div>
        <div className="buy-info">
          <span className="book-price">{price}</span>
          <span
            className="iconshop"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {hover ? <BsCartPlusFill size={20} /> : <BsCartPlus size={20} />}
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemCardRow;
