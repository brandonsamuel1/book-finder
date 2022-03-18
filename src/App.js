import { useEffect, useState } from 'react';
import './App.css';

import SearchIcon from './search.svg';

const App = () => {

  const [searchText, setSearchText] = useState('')
  const [bookList, setBookList] = useState([])

  const searchBook = (title) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(result => {
        setBookList(Object.entries(result.items))
        setSearchText('')
      })
  }

  // useEffect(() => {
  //   searchBook(searchText)
  // }, [])

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }


  return (
    <div className="App">
      <h1>Book Finder</h1>
      <div className='search'>
        <input placeholder='Search book title...' value={searchText} onChange={handleSearch} />
        <img src={SearchIcon} alt='search-icon' onClick={() => searchBook(searchText)} />
      </div>
      <div className='container'>
        {bookList.map((book) => (
          <div className='card'>
            <div className='card-head'>
              <img src={book[1].volumeInfo.imageLinks.thumbnail} alt="book-cover" />
            </div>
            <div className='card-body'>
              <span className="tag">{book[1].volumeInfo.categories}</span>
              <br />
              <h4>{book[1].volumeInfo.title} </h4>
              <br />
              <p>{book[1].volumeInfo.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
