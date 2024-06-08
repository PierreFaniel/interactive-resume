import { Component } from "react";
import "@/components/Experience.css";

export default class Experiences extends Component {
  render() {
    return (
      <section id="experienceSection" className="container experience">
        <h2>Work Experience</h2>
        <div className="experience-content">
          <div className="experience-item">
            <div className="left-column">08/2018 - 05/2019</div>
            <div className="right-column">
              <strong>Senior Full Stack Developer</strong>
              <span className="badge badge-orange">full-time</span>
              <br />
              <i>Niboo, Brussels, Belgium</i>
              <div className="job-description">
                After a short tenure at Stanler/Stella, Pierre came back to
                Niboo as a technical team leader. He managed a scrum team of 5
                developers.
                <ul className="tasks-description">
                  <li>
                    Improved performances on complex Python background jobs
                    reducing execution time from 2+ hours to under 3 minutes.
                  </li>
                  <li>
                    Integrated tailored solutions into Odoo ERP for 20+ clients
                  </li>
                  <li>
                    Drove dozens of technical trainings internally for less
                    experienced developers (e.g. Odoo ERP basics, Git flow,
                    accounting with Odoo)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience-item">
            <div className="left-column">04/2018 - 07/2018</div>
            <div className="right-column">
              <strong>Full Stack Developer</strong>
              <span className="badge badge-orange">full-time</span>
              <br />
              <i>Stanley/Stella, Brussels, Belgium</i>
              <div className="job-description">
                As the sole in-house developer of Stanley/Stella, Pierre's main
                focuses were to improve the existing e-commerce website and ease
                the life of the company's other departments:
                <ul className="tasks-description">
                  <li>
                    Revamped of the e-commerce platform's responsivness,
                    implementation of the designer's HTML mock ups
                  </li>
                  <li>
                    Update the physical clothing store's kiosk, which required
                    learning Electron Js (react) autonomously
                  </li>
                  <li>
                    Implemented a process of one-pager PDF product sheets
                    generation based on the products' data from the ERP
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience-item">
            <div className="left-column">08/2015 - 04/2018</div>
            <div className="right-column">
              <strong>Full Stack Developer</strong>
              <span className="badge badge-orange">full-time</span>
              <br />
              <i>Niboo, Brussels, Belgium</i>
              <div className="job-description">
                Pierre was the first full-time employee and developer of Niboo.
                As a junior develeper out of college, he was a full time Odoo
                consultant on a yearlong e-commerce project. He then was an Odoo
                consultant on several smaller Odoo implementation and
                integration projects simultaneously.
                <ul className="tasks-description">
                  <li>
                    Fully implemented a consultant placement platform built on
                    top of the Odoo ERP in a month time
                  </li>
                  <li>
                    Conducted multiple user trainings on the whole sales
                    workflow with Odoo, from marketing to billing
                  </li>
                  <li>
                    Succesfully formatted and imported 10+ new clients'
                    production data into the new Odoo ERP instance
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience-item">
            <div className="left-column">02/2015 - 05/2015</div>
            <div className="right-column">
              <strong>IT Intern</strong>
              <span className="badge badge-blue">internship</span>
              <br />
              <i>Proximus, Liège, Belgium</i>
              <div className="job-description">
                Implementation from the ground up of a custom Excel report
                generating tool in VBA for the outsourcing division of the Liège
                province, aggregating data from 3 databases
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
