import React, { Component } from 'react';
import './RepoList.css';
import Repo from './Repo';
import PaginationElement from './PaginationElement';
import BlankList from '../BlankList/BlankList';
import PropTypes from 'prop-types';
import { paginateCalc, splitRepoList } from '../Utilities/utilities';
import Loading from '../Loading/Loading';

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

    async splitRepos(allRepos, pageNumber){
        const currentRepos = await splitRepoList(allRepos, pageNumber);
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
                this.splitRepos(this.props.repos, this.state.page);
            }
        }

        if(newPageNumber === "up"){
            if((pageNum + 1) <= maxPageNum) {
                pageNum++;
                this.setState({
                    page:pageNum
                })
                this.splitRepos(this.props.repos, this.state.page);
            }
        }
        if(newPageNumber !== "up" && newPageNumber !== "down"){
            this.setState({
                page:newPageNumber
            })
            this.splitRepos(this.props.repos, this.state.page);
        }
    }

    render() {
        return (
            <div className="repoList">
                <PaginationElement numberOfPages={this.state.numberOfPages} page={this.state.page} changePage={this.changePage} />

                    {this.props.loading === true && <Loading />}
                    {this.props.repos && this.props.repos.length === 0 && <BlankList />}
                    {!this.props.repos && <BlankList />}
                    {this.state.reposToShow && 
                        <div className="grid-results">
                            {this.state.reposToShow.map((repo, key)=>{
                                return (
                                    <Repo repo={repo} key={key}/>
                                )
                            })}
                        </div>
                        }
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