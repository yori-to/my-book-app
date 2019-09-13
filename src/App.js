import React from 'react';
import './App.css';
import Header from "./components/Header";
import Details from "./components/Details";
// import Loading from './components/Loading';
// import Book from "./components/Book";

class App extends React.Component {
  constructor(){
  super();
    this.state = {
      books: [],
      category: "JavaScript"
    };
  }

  handleSearch = text => {
    if (text === this.state.category || text === undefined) {
      return;
    }
    this.makeFetch(text);
  }

  componentDidMount() {
    this.makeFetch();
  }

  // makeFetch(category = this.state.category)
  makeFetch(category = "JavaScript"){
    let url = `https://www.googleapis.com/books/v1/volumes?q=${category}`;
    fetch(url)
    .then(response => response.json())
    .then(jsonResponse => this.setState({ books:jsonResponse.items, category: category }));
  }


  render() {
    const books = this.state.books;
    console.log(books);
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-primary">
          <h2 id="page-title">Book Catalog</h2>
        </nav>
        <Header search={this.handleSearch} currentCategory={this.state.category}/>
        {/* <Book bookUrl="https://www.googleapis.com/books/v1/volumes/F6tOAAAAcAAJ"/> */}
        <Details books={books} category={this.state.category}/>
      </div>
    );
  }
}

export default App;
