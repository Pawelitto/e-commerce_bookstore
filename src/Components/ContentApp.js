import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard_col';
// import ItemCardRow from './ItemCard_row';
// import Sorting from './Sorting';

import '../Styles/CA_copy.css';

const ContentApp = () => {
  const [width, setWidth] = useState(window.innerWidth);
  let [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/books?page_number=1&page_size=30')
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
    <ItemCard key={book.isbn} {...book} mode={width > 768 ? true : false} />
  ));

  return (
    <div className="backgrounds">
      <div className="content-App">
        {/* <div className={width < 768 ? 'products mobile' : 'products'}> */}
        <div className={'products ' + (width < 768 ? 'mobile' : '')}>
          {/* <Sorting /> */}

          {cards_column}
        </div>
      </div>
    </div>
  );
};

export default ContentApp;
