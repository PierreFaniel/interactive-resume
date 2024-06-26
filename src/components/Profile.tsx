import { Component } from "react";
import "@/components/Profile.css";
import ProfilePicture from "@/assets/images/profile.jpg";
import GilabLogo from "@/assets/images/logos/gitlab.png";
import GithubLogo from "@/assets/images/logos/github.png";
import LinkedinLogo from "@/assets/images/logos/linkedin.png";

export default class Profile extends Component {
  fullYearsOfProfessionalExperience() {
    // Calculate the difference in milliseconds between the two dates
    let diff = (new Date().getTime() - new Date(2015, 8, 15).getTime()) / 1000;
    // Convert the difference from milliseconds to days
    diff /= 86400;
    // Calculate the approximate number of years by dividing the difference in days by the average number of days in a year (365.25), rounded down
    return Math.floor(diff / 365.25);
  }
  render() {
    return (
      <section id="profileSection" className="container profile">
        <h2>Profile</h2>
        <div className="profile-content">
          <div className="profile-details">
            <div>
              <strong>Name:</strong>
              <div>Pierre Faniel</div>
            </div>
            <br />
            <div className="social-logos">
              <a href="https://linkedin.com/in/PierreFaniel">
                <img
                  src={LinkedinLogo}
                  alt="Pierre Faniel on LinkedIn"
                  title="Check me on LinkedIn"
                />
              </a>
              <a href="https://github.com/PierreFaniel">
                <img
                  src={GithubLogo}
                  alt="Pierre Faniel on GitHub"
                  title="Check me on GitHub"
                />
              </a>
              <a href="https://gitlab.com/PierreFaniel">
                <img
                  src={GilabLogo}
                  alt="Pierre Faniel on GitLab"
                  title="Check me on GitLab"
                />
              </a>
            </div>
          </div>
          <div className="profile-description">
            <p>
              With more than {this.fullYearsOfProfessionalExperience()} years of professional experience, Staff Full
              Stack Developer Pierre Faniel has worked on a wide range of web
              application projects from the conception, implementation, and
              through the maintenance phase.
            </p>
            <p>
              Pierre is a dynamic, results-oriented problem solver with a strong
              sense of ownership; he has worked with several teams that have
              followed primarily agile methodologies (scrum mainly), but also
              kanban and waterfall.
            </p>
          </div>
          <div className="profile-picture">
            <img src={ProfilePicture} alt="Pierre Faniel profile - 2024" />
          </div>
        </div>
      </section>
    );
  }
}
