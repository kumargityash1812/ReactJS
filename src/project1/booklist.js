import React from 'react';
//CSS
import './index.css';
import { books } from './books';
import { Navbar }  from './navbar';
import Book from './book';
export default function  BookList() {
    return (<>
            <Navbar title='Bookstore' title2='Books' title3='Authors' year='Years of Publish'/>
      <section>
        {books.map((book) => {
          return (<Book books={book} />);
        })}
           
    
        </section>
   </> );
}
