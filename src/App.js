import React, { Component } from 'react';
import './App.css';

import UserTableContainer from './containers/userTableContainer';
import PaginationContainer from './containers/paginationContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{"Users(500)"}</h1>
        <UserTableContainer />
        <PaginationContainer />
      </div>
    );
  }
}

export default App;
