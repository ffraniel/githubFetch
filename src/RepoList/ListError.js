import React, { Component } from 'react';
import './ListError.css';

class ListError extends Component {
    render() {
        return (
            <div className="listError">
                <p>We had an error connecting to Github. Please refresh the page and try again.</p>
            </div>
        )
    }
}

export default ListError;