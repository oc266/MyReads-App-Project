import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'
import BookShelf from './BookShelf.js'

class BookCase extends Component {

  render() {
    const { books } = this.props

    let currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    let wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    let haveRead = books.filter((book) => book.shelf === 'read')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books = {currentlyReading}
              shelfName = 'Currently Reading'
            />
            <BookShelf
              books = {wantToRead}
              shelfName = 'Want To Read'
            />
            <BookShelf
              books = {haveRead}
              shelfName = 'Read'
            />
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
