import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Header from './Header/Header';
import RepoList from './RepoList/RepoList';
import BlankList from './BlankList/BlankList';
import RepoFull from './RepoFull/RepoFull';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch >
            <Route exact path="/" component={RepoList} />
            <Route path="/repo/:repoID" component={RepoFull} />
            <Route default component={BlankList}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
