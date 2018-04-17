import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import RepoList from './RepoList/RepoList';
import BlankList from './BlankList/BlankList';
import RepoFull from './RepoFull/RepoFull';
import ListError from './RepoList/ListError';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RepoList />
        {/* <BlankList /> */}
        {/* <ListError /> */}
        {/* <RepoFull /> */}
      </div>
    );
  }
}

export default App;
