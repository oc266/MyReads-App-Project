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

  // Upon the component mounting, get all books in the shelf currently
  // then update this.state.books to trigger a re-rendering of the page
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, shelf) => {
    // Make change happen immediately on page, so we do not need
    // to wait for the server to be updated and then for the
    // BooksAPI to get all the books currently on a shelf from
    // the server.
    // The idea of using .findIndex was adapted from the tech
    // webinar organised by udacity for this project
    let books = []
    // If the book we are updating the shelf for is already on
    // the bookcase then we just need to update the value of the
    // shelf for this book and keep all other books in
    // this.state.books as they are
    // Otherwise we need to update the value of the shelf for this
    // book and then push it to this.state.books
    if (this.state.books.findIndex(bookInBookcase => bookInBookcase.id === book.id) > 0) {
      book.shelf = shelf
      books = this.state.books
    } else {
      book.shelf = shelf
      books = this.state.books.push(book)
    }
    // Update the state of this.state.books, which will trigger
    // a re-rendering of the page
    this.setState({ books })

    // Now, update the server to save the shelf change
    BooksAPI.update(book, shelf).then((done) => {
    })
  }

  updateQuery = (query) => {
    this.setState({ query: query })
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
            // The idea of using .findIndex was adapted from the
            // tech webinar organised by udacity for this project
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
    } else {
      this.setState({booksInSearch: booksInSearch})
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
            onUpdateShelf = {(book, shelf) => this.updateShelf(book, shelf)}
          />
        )}/>
        <Route exact path = '/' render = {() => (
          <BookCase
            books={this.state.books}
            onUpdateShelf = {(book, shelf) => this.updateShelf(book, shelf)}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
