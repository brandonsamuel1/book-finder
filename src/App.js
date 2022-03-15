import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [searchText, setSearchText] = useState('')
  const [bookList, setBookList] = useState([])

  const searchBook = (title) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(result => {
        console.log(result.items)
      })
  }

  useEffect(() => {
    searchBook('snoppy')
  }, [])


  return (
    <div className="App">
      Hello App
    </div>
  );
}

export default App;
