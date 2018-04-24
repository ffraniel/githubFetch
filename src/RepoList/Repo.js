import React, { Component } from 'react';
import './Repo.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Repo extends Component {
    render() {
        let repo = this.props.repo;
        return(
            <div className="repo-list">
                <Link to={{pathname:`/repo/${repo.owner.login}/${repo.name}`}}>
                    <h3 className="repo-list-name">{repo.name}</h3>
                </Link>
                <p className="repo-list-author">Author: 
                    <a className="repo-full-author" href={`https://github.com/${repo.owner.login}`}> {repo.owner.login}</a>
                </p>
                <p className="repo-list-forks">Number of Forks: {repo.forks}</p>
                <p className="repo-list-issues">Open issues: {repo.issues_open_count}</p>
                <Link to={{pathname:`/repo/${repo.owner.login}/${repo.name}`}}>
                    <p>Repo Details</p>
                </Link>
            </div>
        )
    }
}

Repo.propTypes = {
    repo:PropTypes.object
}

export default Repo;