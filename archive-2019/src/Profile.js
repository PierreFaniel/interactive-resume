import React, { Component } from 'react';
import './Profile.css';
import profile_picture from './profile.jpg';
import gitlab_logo from './logos/gitlab.png';
import github_logo from './logos/github.png';
import linkedin_logo from './logos/linkedin.png';
import twitter_logo from './logos/twitter.png';

class Profile extends Component {
    computeAge(){
        const diff = new Date().getTime() - new Date(1992, 10, 25).getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

    render(){
        return (
            <section id="profileSection" className="container profile">
                <h2>Profile</h2>
                <div className="profile-content">
                    <div className="profile-details">
                        <div>
                            <strong>Name:</strong>
                            <div>Pierre Faniel</div>
                        </div>
                        <br/>
                        <div>
                            <strong>Age:</strong>
                            <div>{this.computeAge()} years</div>
                        </div>
                        <div className="social-logos">
                            <a href="https://gitlab.com/PierreFaniel"><img src={gitlab_logo} alt="Pierre Faniel on GitLab" title="Check me on GitLab"/></a>
                            <a href="https://github.com/PierreFaniel"><img src={github_logo} alt="Pierre Faniel on GitHub" title="Check me on GitHub"/></a>
                            <a href="https://linkedin.com/in/PierreFaniel"><img src={linkedin_logo} alt="Pierre Faniel on LinkedIn" title="Check me on LinkedIn"/></a>
                            <a href="https://twitter.com/PierreFaniel"><img src={twitter_logo} alt="Pierre Faniel on Twitter" title="Check me on Twitter"/></a>
                        </div>
                    </div>
                    <div className="profile-description">
                        Pierre is pationate about technologies, determined and daring, he strives on starting new projects, satisfying his sense of curiosity and keeps an open mind.
                        He works with Python, React, HTML, SQL as well as JavaScript. His set of skills allows him to work on the front and the backend.
                        <br/><br/>
                        His past experiences on numerous projects allow him to focus on the given targets and on the means to reach these objectives in the interest of the users and business.
                        He communicates his passion with enthusiasm, transmits his knowledge and learns from his co-workers.
                  </div>
                    <div className="profile-picture">
                        <img src={profile_picture} alt="Pierre Faniel profile - 2019"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Profile;
  