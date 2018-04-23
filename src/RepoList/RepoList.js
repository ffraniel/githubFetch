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
            reposToShow:[],
            numberOfPages:null
        } 
        this.changePage = this.changePage.bind(this);     
    }

    componentWillReceiveProps(){
        this.updatePages(this.props.repos);
        this.splitRepos(this.props.repos, this.state.page);
    }

    updatePages(reposOnProps){
        // get number of pages
        let paginatedNumber = paginateCalc(reposOnProps);
        this.setState({
            numberOfPages:paginatedNumber
        })
    }

    //call this when change page
    splitRepos(allRepos, pageNumber){
    // split results and pass the correct ones to render
        let endValue = pageNumber * 10;
        let startValue = endValue - 10;
        let currentRepos = allRepos.slice(startValue, endValue);
        this.setState({
            reposToShow:currentRepos
        })
    }

    changePage(newPageNumber){
        let maxPageNum = Math.ceil(this.props.repos.length / 10);
        let minPageNum = 1;
        let pageNum = this.state.page;

        if(newPageNumber === "down"){
            if((pageNum - 1) >= minPageNum) {
                pageNum--;
                this.setState({
                    page:pageNum
                })
            }
        }

        if(newPageNumber === "up"){
            if((pageNum + 1) <= maxPageNum) {
                pageNum++;
                this.setState({
                    page:pageNum
                })
            }
        }
        if(typeof newPageNumber === "number"){
            this.setState({
                page:newPageNumber
            })
        }
    }

    render() {
        return (
            <div className="repoList">
                <PaginationElement numberOfPages={this.state.numberOfPages} page={this.state.page} changePage={this.changePage} />
                    {this.props.loading === true && <div><h1>LOAAAAAADDING</h1></div>}
                    {this.props.repos.length === 0 && <BlankList />}
                    {this.props.repos && this.props.repos.map((repo, key)=>{
                        return (
                            <Repo repo={repo} key={key}/>
                        )
                    })}
                    <PaginationElement numberOfPages={this.state.numberOfPages} page={this.state.page} changePage={this.changePage} />
            </div>
        )
    }
}

RepoList.propType = {
    foundRepos: PropTypes.func,
    repos: PropTypes.array
}

export default RepoList;