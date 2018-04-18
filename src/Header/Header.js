import React, { Component } from 'react';
import './Header.css';
import Search from '../Search/Search';

class Header extends Component {
    render(){
        return(
        <header className="header">
          <h1 className="header-title">The Repo Room</h1>
          <Search handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
        </header>
        )
    }
}

export default Header;