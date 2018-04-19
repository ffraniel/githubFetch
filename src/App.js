import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import RepoList from './RepoList/RepoList';
import BlankList from './BlankList/BlankList';
import RepoFull from './RepoFull/RepoFull';
import { fetchRepos, useRepos, paginateCalc } from './Utilities/utilities';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      page:1,
      foundRepos:[],
      searchValue:'',
      numberOfPages:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
        searchValue:event.target.value
    })
  }

  handleSubmit = async (event) => {
      event.preventDefault();
      const data = await fetchRepos(this.state.searchValue, 1);

      this.setState(useRepos(data, this.state))

      let paginatedNumber = await paginateCalc(data);
      
      this.setState({
          searchValue:'',
          numberOfPages:paginatedNumber
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <Switch >
            <Route exact path="/" render={props => <RepoList {...props} repos={this.state.foundRepos} />} />
            <Route path="/repo/:owner/:name" component={RepoFull} />
            <Route default component={BlankList}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
