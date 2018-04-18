import React, { Component } from 'react';
import './RepoList.css';
import Repo from './Repo';
import PaginationElement from './PaginationElement';
import ListError from './ListError';
import BlankList from '../BlankList/BlankList';
import PropTypes from 'prop-types';

class RepoList extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div className="repoList">
                <PaginationElement repos={this.props.repos} />
                {this.props.repos.map((repo, key)=>{
                    return (
                        <Repo repo={repo} key={key}/>
                    )
                })}
                <PaginationElement repos={this.props.repos} />
            </div>
        )
    }
}

RepoList.propType = {
    foundRepos: PropTypes.func
}

export default RepoList;