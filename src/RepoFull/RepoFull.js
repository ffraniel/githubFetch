import React, { Component } from 'react';
import './RepoFull.css';
import Profile from './Profile';

class RepoFull extends Component {
    render() {
        return (
            <div className="repoFull">
                <button className="backButton">Back</button>
                <p className="repo-full-name" >THIS IS THE FUll repo</p>
                <p className="repo-full-author">Information</p>
                <p className="repo-full-readme" >all of the testds dsd dsi oiosof djdd</p>
                <Profile />
                
            </div>
        )
    }
}

export default RepoFull;