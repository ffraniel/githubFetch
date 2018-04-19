import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className="user-profile">
                <a href={user.html_url}>
                    <h3 className="user-login">{user.login}</h3>
                </a>
                <img alt="user profile" className="avatar" src={user.avatar_url} />
                <p className="user-name">{user.name}</p>
                <p className="user-created">Joined: {user.created_at}</p>
                <p className="user-location">{user.location}</p>
                <p className="user-bio">{user.bio}</p>
                <p className="user-publicRepos">Public Repos: {user.public_repos}</p>
                <p className="user-followers">Followers: {user.followers}</p>
                <p className="user-following">Following: {user.following}</p>
            </div>
        )
    }
}

export default Profile;