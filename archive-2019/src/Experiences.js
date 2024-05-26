import React, { Component } from 'react';
import './Experiences.css'

class Experiences extends Component {
    render(){
        return(
            <section id="experienceSection" className="container experience">
                <h2>Work Experience</h2>
                <div className="experience-content">
                    <div className="experience-item">
                        <div className="left-column">
                            08/2018 - 05/2019
                        </div>
                        <div className="right-column">
                            <strong>Senior Full Stack Developer</strong> <span className="badge badge-orange">employee</span><br/>
                            <i>Niboo, Brussels, Belgium</i>
                            <div className="job-description">
                                As the main developer at Niboo, his main objectives were to advise customers on sensitive topics and help less experienced developers:
                                <ul className="tasks-description">
                                    <li>Provided both functional and technical support for customers and on the Odoo ERP projects</li>
                                    <li>Analyzed the customer's requirements technically and functionally needs and estimated the workload of the implementations</li>
                                    <li>Fully implemented features, organized releases, realized deployments, deployments follow-ups, cleanup and re-organizing of the Git repositories</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            04/2018 - 07/2018
                        </div>
                        <div className="right-column">
                            <strong>Full Stack Developer</strong> <span className="badge badge-orange">employee</span><br/>
                            <i>Stanley/Stella, Brussels, Belgium</i>
                            <div className="job-description">
                                As the sole in-house developer of Stanley/Stella, Pierre's main focuses were to improve the existing e-commerce website and ease the life of the company's other departments:
                                <ul className="tasks-description">
                                    <li>Revamp of the e-commerce platform's responsivness, implementation of the designer's HTML mock ups</li>
                                    <li>Autonomously learned Electron in order to update the physical clothing store's kiosk</li>
                                    <li>Implemented a process of one-pager PDF product sheets generation based on the products' data from the ERP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            09/2017 - 04/2018
                        </div>
                        <div className="right-column">
                            <strong>Technical Team Leader</strong> <span className="badge badge-orange">employee</span><br/>
                            <i>Niboo, Brussels, Belgium</i>
                            <div className="job-description">
                                Pierre's targets as Niboo's Technical Team Leader were to enforce the different pipeline's processes and to ensure high quality developments:
                                <ul className="tasks-description">
                                    <li>Autonomous implementation of the MVP phase of a consultant placement platform in a month time</li>
                                    <li>Management and distribution of the development resources across the ongoing ERP projects</li>
                                    <li>Organization of workshops to internally pass on knowledge about Odoo, Git and JavaScript</li>
                                    <li>Management of a team of 5 developers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            08/2015 - 08/2017
                        </div>
                        <div className="right-column">
                            <strong>Junior Full Stack Developer</strong> <span className="badge badge-orange">employee</span><br/>
                            <i>Niboo, Brussels, Belgium</i>
                            <div className="job-description">
                                The objectives of Pierre as the first employee/developer of Niboo were to master the whole stack and to be able to completely develop a feature an deploy it to production:
                                <ul className="tasks-description">
                                    <li>Integration of HTML mock-ups on the website and e-commerce parts of Odoo</li>
                                    <li>Functional customer trainings on the whole sales flow of Odoo, including accounting</li>
                                    <li>Initial import of customers' data into their Odoo database</li>
                                    <li>Autonomously worked on the MVP phase of the smart cashier directly connected to Odoo</li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            02/2015 - 05/2015
                        </div>
                        <div className="right-column">
                            <strong>IT Intern</strong> <span className="badge badge-blue">internship</span><br/>
                            <i>Proximus, Liège, Belgium</i>
                            <div className="job-description">
                                Implementation from scratch of a custom Excel report generating tool in VBA for the Liege area outsourcing division aggregating data from several databases.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experiences;
  