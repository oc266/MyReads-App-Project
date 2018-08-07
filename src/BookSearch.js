import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookSearch extends Component {

  render() {
    const { query, booksInSearch, onUpdateQuery } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/* Input field for the search - each time the user changes the
            input to this, the function updateQuery in the App.js
            component is called and the books returned by the search
            are updated. The page is then re-rendered to display any
            books that have been found by the search. */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => onUpdateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {// If the user's search returns books, then display these on
            // the page
            booksInSearch !== undefined ?
              booksInSearch.map((book) => (
                <li key={book.id}>
                  <Book
                    book = {book}
                    onChangeShelf = {(book, shelf) => this.props.onUpdateShelf(book, shelf)}
                  />
                </li>
              )) : ''
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
