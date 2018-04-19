import React, { Component } from "react";
import "./RepoFull.css";
import Profile from "./Profile";
import { getRepo, getUser } from "../Utilities/utilities";
import { Link, NavLink } from "react-router-dom";

class RepoFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: {},
      user: {}
    };
    this.updateState = this.updateState.bind(this);
  }
  componentDidMount() {
    this.updateState(
      this.props.match.params.owner,
      this.props.match.params.name
    );
  }

  async updateState(owner, name) {
    const data = await getRepo(owner, name);
    this.setState({
      repo: data
    });
    const userData = await getUser(owner);
    this.setState({
      user: userData
    });
  }

  render() {
    let repo = this.state.repo;
    return (
      <div className="repoFull">
        {this.state.repo.name && this.state.repo.owner.login && (
          <div>
            <NavLink to="/" className="back-link">Home</NavLink>
            <a href={repo.html_url} >
                <h3 className="repo-full-name">{repo.name}</h3>
            </a>
            <a href={`https://github.com/${repo.owner.login}`}>
                <p className="repo-full-author">{repo.owner.login}</p>
            </a>    
            <div className="repo-info">
              <p className="repo-created">{repo.created_at}</p>
              <p className="repo-pushed">{repo.pushed_at}</p>
              <p className="repo-security">
                Public: {repo.private === true && <span>False</span>}
                {repo.private === false && <span>True</span>}
              </p>
              <p className="repo-language">Language: {repo.language}</p>
              <p className="repo-forks">Forks: {repo.forks}</p>
              <p className="repo-issues">Issues: {repo.open_issues_count}</p>
              <p className="repo-subscribers">
                Subscribers: {repo.subscribers_count}
              </p>
            </div>
            <p className="repo-full-readme">
              all of the testds dsd dsi oiosof djdd
            </p>
            <Profile user={this.state.user} />
          </div>
        )}
      </div>
    );
  }
}

export default RepoFull;
