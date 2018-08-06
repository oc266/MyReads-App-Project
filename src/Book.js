import React from 'react'

function Book (props) {
  const style = {
    width: 128,
    height: 193,
    backgroundImage: props.book.imageLinks ?
      `url(${props.book.imageLinks.thumbnail})` : ''
  }

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={style}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.author ? props.books.author : ''}</div>
    </div>
  )
}

export default Book
