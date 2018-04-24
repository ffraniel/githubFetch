import React, { Component } from 'react';
import './Header.css';
import Search from '../Search/Search';
import PropTypes from 'prop-types';

class Header extends Component {
    render(){
        return(
        <header className="header">
          <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github logo" />
          <Search handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
        </header>
        )
    }
}

Header.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
}

export default Header;