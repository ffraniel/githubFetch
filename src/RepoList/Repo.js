import React, { Component } from 'react';
import './Repo.css';

class Repo extends Component {
    render() {
        let repo = this.props.repo;
        return(
            <div className="repo-list">
            {console.log(this.props.repo)}
                <h3 className="repo-list-name">{repo.name}</h3>
                <p className="repo-list-author">{repo.owner.login}</p>
                <p className="repo-list-forks">Number of Forks: {repo.forks}</p>
                <p className="repo-list-readme">This project aims to add an element of...</p>
                <button className="expandButton">↓</button>
                <button className="repoButton">Details</button>
            </div>
        )
    }
}

export default Repo;