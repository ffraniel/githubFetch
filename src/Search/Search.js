import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchValue:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            searchValue:event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        // make search
        this.setState({
            searchValue:''
        })
    }

    render(){
        return(
        <form className="searchForm" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.searchValue} onChange={this.handleChange}/>
            <input type="submit" />
        </form>
        )
    }
}

export default Search;