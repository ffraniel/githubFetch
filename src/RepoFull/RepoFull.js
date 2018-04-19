import React, { Component } from 'react';
import './RepoFull.css';
import Profile from './Profile';

class RepoFull extends Component {
    render() {
        let repoName = this.props.match.params.name;
        let repoOwner = this.props.match.params.owner;
        return (
            <div className="repoFull">
                <button className="backButton">Back</button>
                <h3 className="repo-full-name" >{repoName}</h3>
                <p className="repo-full-author">{repoOwner}</p>
                <div className="repo-info">
                    <h4 className="repo-forks">Number of forks: 7</h4>
                    <h4 className="repo-issues">Number of issues open: 2</h4>
                </div>
                <p className="repo-full-readme" >all of the testds dsd dsi oiosof djdd</p>
                <Profile />
                
            </div>
        )
    }
}

export default RepoFull;