import React from 'react'
import { Route } from 'react-router-dom'
import BookCase from './BookCase.js'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    booksInSearch: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    let booksInSearch = []
    if (query) {
      BooksAPI.search(query).then((response) => {
        if (response.length) {
          booksInSearch = response.map((bookFromSearch) => {
            // If a book from the search has the same id as a book
            // in the bookcase, then it is the same book and so
            // we need to add the book from the bookcase to the
            // array booksInSearch so that the shelf information
            // is present.
            const index = this.state.books.findIndex(bookInBookcase =>
              bookInBookcase.id === bookFromSearch.id)
            if (index >= 0) {
              return this.state.books[index]
            } else {
              return bookFromSearch
            }
          })
        }
        this.setState({booksInSearch: booksInSearch})
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render = {() => (
          <BookSearch
            books={this.state.books}
            booksInSearch={this.state.booksInSearch}
            onUpdateQuery={this.updateQuery}
          />
        )}/>
        <Route exact path = '/' render = {() => (
          <BookCase
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
