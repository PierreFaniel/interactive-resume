import React, { Component } from 'react';
import './Profile.css';
import profile from './profile.webp';

class Profile extends Component {
    computeAge(){
        const today = new Date();
        const birthDate = new Date(1992, 10, 25);
        const diff = today.getTime() - birthDate.getTime();
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
                    </div>
                    <div className="profile-description">
                        Since starting as a full time developer in 2015, I have been working with <a href="https://www.odoo.com/">Odoo</a>, a Belgium made open source ERP software.
                        I have had the chance to work on a bundle of projects scaling from small startup ERP tweaking to big company completely new features building on top of the Odoo solution.
                        I am well versed in most of the Odoo stack; I know how to tweak most backend modules both technically and functionally and I have helped building several frontend apps.
                        I am detail oriented with a particular affection for state of the art software. I also would love to discover a whole new stack!
                    </div>
                    <div className="profile-picture">
                        <img src={profile} alt="Pierre Faniel profile - 2017"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
  