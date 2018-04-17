import React, { Component } from 'react';
import './PaginationElement.css';

class PaginationElement extends Component {
    render() {
        return (
            <div className="PaginationElement">
                <ul className="page-button-list">
                    <li>
                        <button className="end-button">←</button>
                    </li>
                    <li>
                        <button className="page-button">1</button>
                    </li>
                    <li>
                        <button className="page-button">2</button>
                    </li>
                    <li>
                        <button className="page-button">3</button>
                    </li>
                    <li>
                        <button className="page-button">4</button>
                    </li>
                    <li>
                        <button className="page-button">5</button>
                    </li>
                    <li>
                        <button className="end-button">→</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PaginationElement;