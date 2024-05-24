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
            <div className="container profile">
                <h2>Profile</h2>
                <h4>I am an all around (Odoo) Developer</h4>
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
                        Since starting as a full time developer in 2015, I have been working with <a href="https://www.odoo.com/">Odoo</a>, a Belgium made open source ERP software.
                        I have had the chance to work on a bundle of projects scaling from small startup ERP tweaking to big company completely new features building on top of the Odoo solution.
                        I am well versed in most of the Odoo stack; I know how to tweak most backend modules both technically and functionally and I have helped building several frontend apps.
                        I pay a lot of attention in writing efficient and well organised code to ensure that others can easily add a feature to it.
                    </div>
                    <div className="profile-picture">
                        <img src={profile_picture} alt="Pierre Faniel profile - 2017"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
  