import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
    render(){
        return(
        <form className="searchForm" onSubmit={this.props.handleSubmit}>
            <input type="text" value={this.props.searchValue} onChange={this.props.handleChange} />
            <input type="submit" />
        </form>
        )
    }
}

Search.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
}

export default Search;