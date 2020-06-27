import React,{useState} from 'react';
import './App.css';
import Header from "./Header";
import Book from "./Book";
import About from "./About";
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {

  const [books,setBooks] = useState([
          {
            title:"Cracking The Coding Interview",
            author:"Gayle Laacman Macdowell"
          },
          {
            title:"First 20 Hours of Learning",
            author:"Josh Kauffman"
          }
        ]);
  const [title,setTitle] = useState("");
  const [author,setAuthor] = useState("");

  const changeTitle = (e)=>{
    setTitle(e.target.value);
  }

  const changeAuthor = (e)=>{
    setAuthor(e.target.value);
  }

  const addbook = (e)=>
  {
    e.preventDefault();
    setBooks([...books,{title,author}]);
    setTitle("");
    setAuthor("");
  }

  const deleteBook = (title)=>
  {
    setBooks(books.filter(book=>book.title!==title));
  }  
  return (
      <Router>
        <div className="App">
          <Header addbook={addbook}/>
            <Route exact path="/" render={props=>(
              <React.Fragment>
              <center>
              <form onSubmit={addbook} className="w-50 mt-5 rounded" style={{border:"5px solid red",padding:"10px"}}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Book Title"
                    onChange={changeTitle}
                    value={title}
                    required
                  />
                </div>
                <div className="form-group mt-2 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Book Author"
                    onChange={changeAuthor}
                    value={author}
                    required
                  />
                </div> 
                <button type="submit" className="btn text-white redback">Add Book</button>
              </form>  
              </center>         
              <Book books={books} deleteBook={deleteBook}/>
              </React.Fragment>
              )} />
              <Route exact path="/about" render={props=>(
                <About/>)}/>
        </div>
      </Router>
  );
}

export default App;
