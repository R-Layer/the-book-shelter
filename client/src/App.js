import React, { Component } from 'react';

import SearchBox from './components/SearchBox';
import './app.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      query: ""
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value);
  }

  render() {    
    return (
      <div className="container">
        < SearchBox handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
