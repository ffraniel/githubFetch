import React, { Component } from 'react';
import './RepoFull.css';
import Profile from './Profile';

class RepoFull extends Component {
    render() {
        return (
            <div className="repoFull">
                <button className="backButton">Back</button>
                <h3 className="repo-full-name" >THIS IS THE FUll Repo Name</h3>
                <p className="repo-full-author">Information</p>
                <div className="repo-info">
                    <h4>Number of forks: 7</h4>
                    <h4>Number of issues open: 2</h4>
                </div>
                <p className="repo-full-readme" >all of the testds dsd dsi oiosof djdd</p>
                <Profile />
                
            </div>
        )
    }
}

export default RepoFull;