import React, { Component } from 'react';
import './BlankList.css';

class BlankList extends Component {
    render() {
        return (
            <div className="blankList">
                <p>No repos to show.</p>
            </div>
        )
    }
}

export default BlankList;