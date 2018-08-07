import React, { Component } from 'react'

class Book extends Component {
  state = {
    shelf: 'none'
  }

  // On the book component mounting, set the shelf and render so that
  // this information is contained in the shelf selecter on the page
  componentDidMount() {
    if (this.props.book.shelf) {
      this.setState({ shelf: this.props.book.shelf })
    }
  }

  // A function to be called when the user changes the shelf for
  // any instance of a book
  changeShelf = (newShelf) => {
    this.setState({ shelf: newShelf.target.value })
    this.props.onChangeShelf(this.props.book, newShelf.target.value)
  }

  // Renders an individual book, either on a book shelf or in a book
  // search
  render() {
    const { book } = this.props

    const style = {
      width: 128,
      height: 193,
      backgroundImage: book.imageLinks ?
        `url(${book.imageLinks.thumbnail})` : ''
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={style}></div>
          <div className="book-shelf-changer">
            <select onChange={this.changeShelf} value={this.state.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author ? book.author : ''}</div>
      </div>
    )
  }
}

export default Book
