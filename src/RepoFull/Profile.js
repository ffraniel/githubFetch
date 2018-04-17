import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <img alt="user profile" class="profilePicture" src="https://www.telegraph.co.uk/content/dam/video_previews/f/k/fkaxcwzde6czkusive6ilzshbfccvqo-xlarge.jpg" />
                <p>BEN BOBBINGTONS</p>
                <p>Forks: 7</p>
                <p>AboutME: I'm a cool dude</p>
            </div>
        )
    }
}

export default Profile;