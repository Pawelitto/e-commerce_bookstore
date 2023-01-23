import React from 'react';

import { BsCartPlus } from 'react-icons/bs';

import '../Styles/ItemCard.css';

const ItemCard = ({ title, price, author, cover }) => {
  return (
    <div class="carda">
      <div className="book-img">
        <img src={cover} alt={title} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-author">{author}</div>
      <div className="book-footer">
        <span>{price}PLN</span>
        <span className="iconshop">
          <BsCartPlus size={20} />
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
