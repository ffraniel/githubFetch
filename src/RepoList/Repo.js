import React, { Component } from 'react';
import './Repo.css';

class Repo extends Component {
    render() {
        return(
            <div className="repo-list">
                <h3 className="repo-list-name">Strava Hack</h3>
                <p className="repo-list-author">Christine Bobbingtong</p>
                <p className="repo-list-forks">Number of Forks: 7</p>
                <p className="repo-list-readme">This project aims to add an element of...</p>
                <button className="expandButton">↓</button>
                <button className="repoButton">Details</button>
            </div>
        )
    }
}

export default Repo;