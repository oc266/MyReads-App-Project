import React from 'react'
import Book from './Book.js'

// Renders an individual shelf - the book data which is on the shelf
// is passed to it in an object called books
function BookShelf (props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.books.shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.booksOnShelf.map((book) => (
            <li key={book.id}>
              <Book
                book = {book}
                onChangeShelf = {(book, shelf) => props.onUpdateShelf(book, shelf)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
