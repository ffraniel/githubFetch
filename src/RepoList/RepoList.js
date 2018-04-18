import React, { Component } from 'react';
import './RepoList.css';
import Repo from './Repo';
import PaginationElement from './PaginationElement';
import ListError from './ListError';
import BlankList from '../BlankList/BlankList';

class RepoList extends Component {
    render() {
        return (
            <div className="repoList">
                <PaginationElement />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <PaginationElement />
            </div>
        )
    }
}

export default RepoList;