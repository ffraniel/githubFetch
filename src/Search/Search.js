import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

    render(){
        return(
        <form className="searchForm" onSubmit={this.props.handleSubmit}>
            <input type="text" value={this.props.searchValue} onChange={this.props.handleChange}/>
            <input type="submit" />
        </form>
        )
    }
}

export default Search;