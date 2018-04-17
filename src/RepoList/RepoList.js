import React, { Component } from 'react';
import './RepoList.css';
import Repo from './Repo';

class RepoList extends Component {
    render() {
        return (
            <div className="repoList">
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
            </div>
        )
    }
}

export default RepoList;