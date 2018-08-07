# MyReads Project
This project is part of Udacity's Front End Nanodegree Scholarship.
Given some static starter code for an application which displays books on a bookcase in three categories, the application has been enriched so that the user can move books between shelves, remove books from the bookcase and perform a search for books which can then be added to the bookcase in a specified shelf.

## Installing from source
1. Clone the following repo:
 * git clone https://github.com/oc266/MyReads-App-Project
2. Install all project dependencies with `npm install`
3. Start the development server with `npm start`

## What The App Does
There are two interfaces to the application:
* The main page which displays three shelves with books that the user is currently reading, wants to read or has read. Each book has an associated drop down menu which can be used to move books from one shelf to another or to remove a given book from the bookcase altogether.
* The search page, which upon loading displays only a search bar at the top. The user can populate the search bar and as they type will be presented with a list of up to twenty books which match their search. Once the user has completed a search they can choose to add any books returned to a shelf on their bookcase using associated drop down menus.

## Backend Server
To simplify the development process, Udacity provided a backend server to develop against. The file [`BooksAPI.js`](src/BooksAPI.js) contains provided methods which have been utilised to perform necessary operations on the backend. The methods provided (with descriptions of each method provided by Udacity) are:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`
Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`
Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`
Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Contributing
This repository is part of a project for Udacity's Front End Nanodegree Scholarship. Therefore, I will most likely will not accept pull requests.

## Built with the help of:
* Starter code provided by Udacity (https://github.com/udacity/frontend-nanodegree-feedreader)

## Author
* Oliver Critchifled
