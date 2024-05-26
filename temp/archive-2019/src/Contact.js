import React, { Component } from 'react';
import gitlab_logo from './logos/gitlab.png';
import github_logo from './logos/github.png';
import linkedin_logo from './logos/linkedin.png';
import twitter_logo from './logos/twitter.png';
import './Contact.css';

class Contact extends Component {
    getCopyrightYear(){
        return new Date().getFullYear();
    }

    render(){
        return (
            <section id="contactSection" className="contact">
                <div className="container">
                    <h2>Contact</h2>
                    <div className="contact-logos">
                        <a href="https://gitlab.com/PierreFaniel"><img src={gitlab_logo} alt="Pierre Faniel on GitLab" title="Check me on GitLab"/></a>
                        <a href="https://github.com/PierreFaniel"><img src={github_logo} alt="Pierre Faniel on GitHub" title="Check me on GitHub"/></a>
                        <a href="https://linkedin.com/in/PierreFaniel"><img src={linkedin_logo} alt="Pierre Faniel on LinkedIn" title="Check me on LinkedIn"/></a>
                        <a href="https://twitter.com/PierreFaniel"><img src={twitter_logo} alt="Pierre Faniel on Twitter" title="Check me on Twitter"/></a>
                    </div>
                    <div className="copyright">
                        © Pierre Faniel - {this.getCopyrightYear()}
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;
  