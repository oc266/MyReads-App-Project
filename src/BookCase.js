import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf.js'

class BookCase extends Component {

  render() {
    const { books } = this.props

    let categorizedBooks = [
      {
        shelf: 'Currently Reading',
        booksOnShelf: books.filter((book) => book.shelf === 'currentlyReading')
      },
      {
        shelf: 'Want To Read',
        booksOnShelf: books.filter((book) => book.shelf === 'wantToRead')
      },
      {
        shelf: 'Read',
        booksOnShelf: books.filter((book) => book.shelf === 'read')
      }
    ]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {categorizedBooks.map((category) => (
              <BookShelf
                key = {category.shelf}
                books = {category}
                onUpdateShelf = {(book, shelf) => this.props.onUpdateShelf(book, shelf)}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookCase
