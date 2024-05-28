import { Component } from 'react';
import './Profile.css';
import ProfilePicture from '@/assets/images/profile.jpg';
import GilabLogo from '@/assets/images/logos/gitlab.png';
import GithubLogo from '@/assets/images/logos/github.png';
import LinkedinLogo from '@/assets/images/logos/linkedin.png';

export default class Profile extends Component {
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
						<div className="social-logos">
							<a href="https://github.com/PierreFaniel"><img src={GithubLogo} alt="Pierre Faniel on GitHub" title="Check me on GitHub"/></a>
							<a href="https://linkedin.com/in/PierreFaniel"><img src={LinkedinLogo} alt="Pierre Faniel on LinkedIn" title="Check me on LinkedIn"/></a>
							<a href="https://gitlab.com/PierreFaniel"><img src={GilabLogo} alt="Pierre Faniel on GitLab" title="Check me on GitLab"/></a>
						</div>
					</div>
					<div className="profile-description">
						<p>
							Pierre is pationate about technologies, determined and daring, he strives on starting new projects, satisfying his sense of curiosity and keeps an open mind.<br />
							He works with Python, React, HTML, SQL as well as JavaScript. His set of skills allows him to work on the front and the backend.
						</p>
						<p>
							His past experiences on numerous projects allow him to focus on the given targets and on the means to reach these objectives in the interest of the users and business.<br />
							He communicates his passion with enthusiasm, transmits his knowledge and learns from his co-workers.
						</p>
				</div>
					<div className="profile-picture">
						<img src={ProfilePicture} alt="Pierre Faniel profile - 2024"/>
					</div>
				</div>
			</section>
		);
	}
}
