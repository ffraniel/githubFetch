import React, { Component } from 'react';
import './RepoList.css';
import Repo from './Repo';
import PaginationElement from './PaginationElement';
import ListError from './ListError';
import BlankList from '../BlankList/BlankList';
import PropTypes from 'prop-types';
import { paginateCalc } from '../Utilities/utilities';

class RepoList extends Component {
    constructor(props){
        super(props);  
        this.state={
            page:1,
            numberOfPages:0
        }      
    }
    componentDidMount(){
        this.updateState
    }
    async updateState(){
        let data = this.props.data;
        let paginatedNumber = await paginateCalc(data);
        this.setState({
            numberOfPages:paginatedNumber
        })
    }

    render() {
        return (
            <div className="repoList">
                <PaginationElement numberOfPages={this.state.numberOfPages} page={this.state.page} />
                    {this.props.repos.length === 0 && <BlankList />}
                    {this.props.repos && this.props.repos.map((repo, key)=>{
                        return (
                            <Repo repo={repo} key={key}/>
                        )
                    })}
                    <PaginationElement numberOfPages={this.state.numberOfPages} page={this.state.page} />
            </div>
        )
    }
}

RepoList.propType = {
    foundRepos: PropTypes.func,
    repos: PropTypes.array
}

export default RepoList;