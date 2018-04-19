import React, { Component } from 'react';
import './PaginationElement.css';

class PaginationElement extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage:this.props.page,
            numberOfPages:this.props.numberOfPages
        }
    }

    render() {
        return (
            <div className="PaginationElement">
                <ul className="page-button-list">
                <p>current page: {this.state.currentPage}</p>
                <p>number of page: {this.state.numberOfPages}</p>
                    <li>
                        <button className="end-button">←</button>
                    </li>
                    {console.log(this.state)}
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