import React from 'react'
import { Route } from 'react-router-dom'
import BookCase from './BookCase.js'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books);
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render = {() => (
          <BookSearch/>
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
