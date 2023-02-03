import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard_col';
import ItemCardRow from './ItemCard_row';
// import Sorting from './Sorting';

import '../Styles/CA_copy.css';

const ContentApp = () => {
  const [width, setWidth] = useState(window.innerWidth);
  let [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/books?page_number=1&page_size=30')
      .then((response) => response.json())
      .then((data) => setBooksData(data));

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const cards_column = booksData.map((book) => (
    <ItemCard key={book.isbn} {...book} mode={width > 1080 ? true : false} />
  ));

  const cards_row = booksData.map((book) => (
    <ItemCardRow key={book.isbn} {...book} mode={width > 1080 ? true : false} />
  ));

  return (
    <div className="backgrounds">
      <div className="content-App">
        <div className="products">
          {/* <Sorting /> */}

          {width > 1080 ? cards_column : cards_row}
        </div>
      </div>
    </div>
  );
};

export default ContentApp;
