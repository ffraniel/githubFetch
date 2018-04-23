import React, { Component } from 'react';
import './PaginationElement.css';

class PaginationElement extends Component {

    render() {
        let pageSelectors = [];
        for(let i = 0; i < this.props.numberOfPages; i ++){
            pageSelectors.push(              
            <li key={i+1}>
                <button className="page-button" onClick={()=>{ this.props.changePage(i+1) } } >{i+1}</button>
            </li>);

        }
        return (
            <div className="PaginationElement">
                {this.props.numberOfPages >= 1 &&
                <ul className="page-button-list">
                <p>current page: {this.props.page}</p>
                <p>number of page: {this.props.numberOfPages}</p>
                    <li>
                        <button className="end-button" onClick={()=>{this.props.changePage("down")}} >←</button>
                    </li>
                    {pageSelectors}
                    <li>
                        <button className="end-button" onClick={()=>{this.props.changePage("up")}}>→</button>
                    </li>
                </ul>}
            </div>
        )
    }
}

export default PaginationElement;