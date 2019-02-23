import React, { Component } from 'react';

import SearchForm from './components/SearchForm/SearchForm';
import CardGrid from './components/CardGrid/CardGrid';
import Pagination from './components/Pagination/Pagination';

import './app.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      books: [],
      lastQuery: {},
      pagination: [0,0],
      loading: false,
      error: {}
    };
  };

  componentDidMount = () => {
    if(sessionStorage.state){
      this.setState(JSON.parse(sessionStorage.state));
    };
  };

  submitQuery = async (queryParams, dir) => {

    if(dir === "next") {
      queryParams.index = this.state.pagination[0] +10;
    } else if (dir === "prev") {
      queryParams.index = this.state.pagination[0] -10;
    } else {
      queryParams.index = 0;
    }
    
    this.setState({loading: true, error: ''});

    const response = await fetch('/search', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({queryParams})
    });
    if(response.status !== 200) {
      console.log(response);
      const error = await response.json();
      console.log('message',error);
      return this.setState({
        error: error,
        loading: false
      });
    };
    const {items, totalItems} = await response.json();
    console.log(items)
    const booksData = items.map(book => ({
        id: book.id,
        authors: book.volumeInfo.authors,
        categories: book.volumeInfo.categories,
        description: book.volumeInfo.description,
        infoLink: book.volumeInfo.infoLink,
        publishedDate: book.volumeInfo.publishedDate,
        publisher: book.volumeInfo.publisher,
        thumbnail: book.volumeInfo.imageLinks ?
          book.volumeInfo.imageLinks.thumbnail :
          "question_book.png",
        title: book.volumeInfo.title
        })
    );
        
    this.setState(prevState => ({
      books: booksData,
      lastQuery: queryParams,
      pagination: [queryParams.index, totalItems],
      loading: false
    })
    );

    sessionStorage.setItem('state', JSON.stringify(this.state));
  };

/* TODO: check total results val
   It changes even with the same parameter :O */
  changePage = dir => {
    const { lastQuery, pagination } = this.state;
    if(dir === 'next' && pagination[0]<=pagination[1]) {
        this.submitQuery(lastQuery, 'next')
    } else if (dir === 'prev' && pagination[0]>=10) {
       this.submitQuery(lastQuery, 'prev')
    }
  };
  
  render() {
    const {pagination, books, loading, error} = this.state;
    if (error.statusCode)
      return (
          <div className="container">
          < SearchForm submitQuery={this.submitQuery}/>
            <p className="text-centered danger">ERROR - {error.message} </p>
          </div> )
    else 
      return (
        <div className="container">
          < SearchForm submitQuery={this.submitQuery}/>
        { pagination[1]> 10 && !loading &&
            <Pagination pages={pagination} changePage={this.changePage}/> }
        { loading ?
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
                :
            <CardGrid books={books} />
        }
        </div>
      );
  };
};

export default App;