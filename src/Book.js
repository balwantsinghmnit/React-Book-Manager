import React from 'react';
import Showbook from "./Showbook";

function Book(props) {

  return props.books.map(book=>(
    <Showbook key={book.title} book={book} deleteBook={props.deleteBook}/>
    ));

}

export default Book;
