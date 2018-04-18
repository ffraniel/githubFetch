import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render(){
        return(
        <form className="searchForm">
            <input type="text" />
            <input type="submit" />
        </form>
        )
    }
}

export default Search;