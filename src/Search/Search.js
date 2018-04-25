import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
    render(){
        return(
        <form className="searchForm" onSubmit={this.props.handleSubmit}>
            <input type="text" className="searchBox" placeholder="search for a repo" value={this.props.searchValue} onChange={this.props.handleChange} />
            <input type="submit" value="search" className="searchButton" />
        </form>
        )
    }
}

Search.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    searchValue: PropTypes.string
}

export default Search;