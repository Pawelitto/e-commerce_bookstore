import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard_col';
import ItemCardRow from './ItemCard_row';
// import Sorting from './Sorting';

// import '../Styles/ContentApp.css';
import '../Styles/CA_copy.css';

// const books = [
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: 'J.K. Rowling',
//     cover: 'https://covers.openlibrary.org/b/isbn/9780590353427-M.jpg',
//     price: 15.99,
//     pages: 309,
//     isbn: '9780590353427',
//     releaseDate: '1997-06-26',
//     description:
//       'Harry Potter is an orphaned boy brought up by his cruel aunt and uncle. At the age of eleven, half-giant Rubeus Hagrid informs him that he is actually a wizard and that his parents were murdered by an evil sorcerer named Lord Voldemort.',
//     category: 'Fantasy',
//   },
//   {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     cover: 'https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg',
//     price: 12.99,
//     pages: 180,
//     isbn: '9780743273565',
//     releaseDate: '1925-04-10',
//     description:
//       'The Great Gatsby is a novel by F. Scott Fitzgerald. The story takes place in the summer of 1922 in the fictional town of West Egg on Long Island.',
//     category: 'Classics',
//   },
//   {
//     title: 'The Lord of the Rings',
//     author: 'J.R.R. Tolkien',
//     cover: 'https://covers.openlibrary.org/b/isbn/9780544003415-M.jpg',
//     price: 19.99,
//     pages: 1178,
//     isbn: '9780544003415',
//     releaseDate: '1954-07-29',
//     description:
//       "The Lord of the Rings is an epic high fantasy novel written by J. R. R. Tolkien. The story began as a sequel to Tolkien's earlier, less complex children's fantasy novel The Hobbit, but eventually developed into a much larger work.",
//     category: 'Fantasy',
//   },
//   {
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     cover: 'https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg',
//     price: 9.99,
//     pages: 234,
//     ISBN: '9780141439518',
//     releaseDate: '1813-01-28',
//     description:
//       'Pride and Prejudice is a novel by Jane Austen. It is set in Georgian England and follows the Bennett family.',
//     category: 'Romance',
//   },
//   {
//     title: 'The Alchemist',
//     author: 'Paulo Coelho',
//     cover: 'https://covers.openlibrary.org/b/isbn/9780062315007-M.jpg',
//     price: 12.99,
//     pages: 208,
//     ISBN: '9780062315007',
//     releaseDate: '1988-08-01',
//     description:
//       'The Alchemist is a novel by Paulo Coelho. The story is about a shepherd named Santiago who embarks on a journey to fulfill his personal legend.',
//     category: 'Fiction',
//   },
//   {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     cover: 'https://covers.openlibrary.org/b/isbn/9780061743528-M.jpg',
//     price: 11.99,
//     pages: 324,
//     ISBN: '9780061743528',
//     releaseDate: '1960-07-11',
//     description:
//       'To Kill a Mockingbird is a novel by Harper Lee. The story is set in the fictional town of Maycomb, Alabama and follows the life of Scout Finch and her family.',
//     category: 'Classics',
//   },
//   {
//     title: 'The Hunger Games',
//     author: 'Suzanne Collins',
//     cover: 'https://covers.openlibrary.org/b/isbn/9780439023528-M.jpg',
//     price: 13.99,
//     pages: 374,
//     ISBN: '9780439023528',
//     releaseDate: '2008-09-14',
//     description:
//       'The Hunger Games is a novel by Suzanne Collins. The story is set in a post-apocalyptic world and follows the life of a girl named Katniss Everdeen.',
//     category: 'Science Fiction',
//   },
//   {
//     title: 'The Diary of a Young Girl',
//     author: 'Anne Frank',
//     cover: 'https://covers.openlibrary.org/b/isbn/9780385473788-M.jpg',
//     price: 9.99,
//     pages: 290,
//     ISBN: '9780385473788',
//     releaseDate: '1947-06-25',
//     description:
//       'The Diary of a Young Girl is a book of the writings from the Dutch language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands.',
//     category: 'Autobiography',
//   },
// ];

const ContentApp = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  let [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/books?page_number=1&page_size=30')
      .then((response) => response.json())
      .then((data) => setBooksData(data));

    // const handleWindowResize = () => {
    //   setWidth(window.innerWidth);
    // };

    // window.addEventListener('resize', handleWindowResize);
    // return () => {
    //   window.removeEventListener('resize', handleWindowResize);
    // };
  }, []);

  const bloki = booksData.map((book) => <ItemCard key={book.isbn} {...book} />);
  // const bloki2 = booksData.map((book) => (
  //   <ItemCardRow key={book.isbn} {...book} />
  // ));

  return (
    <div className="backgrounds">
      <div className="content-App">
        <div className="products">
          {/* <Sorting /> */}

          {/* {width > 1080 ? bloki : bloki2} */}
          {bloki}
        </div>
      </div>
    </div>
  );
};

export default ContentApp;
