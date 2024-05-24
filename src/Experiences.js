import React, { Component } from 'react';
import './Experiences.css'

class Experiences extends Component {
    render(){
        return(
            <section id="experienceSection" className="container experience">
                <h2>Work Experience</h2>
                <div className="experience-item">
                    <div className="left-column">
                        08/2018 - Current
                    </div>
                    <div className="right-column">
                        <strong>Odoo Developer</strong> <span className="badge badge-orange">employee</span><br/>
                        <i>Niboo, Brussels, Belgium</i>
                        <div className="job-description">
                            I work on several client Odoo implementation projects with varying scopes. 
                            I also work on passing my knowledge to less experienced developers by organizing training sessions/workshops and writing function and technical documentation.
                        </div>
                    </div>
                </div>
                <div className="experience-content">
                    <div className="experience-item">
                        <div className="left-column">
                            04/2018 - 07/2018
                        </div>
                        <div className="right-column">
                            <strong>Full Stack Developer</strong> <span className="badge badge-orange">employee</span><br/>
                            <i>Stanley/Stella, Brussels, Belgium</i>
                            <div className="job-description">
                                As a Full Stack Developer, my job at Stanley/Stella mostly consisted in working on bringing the retail e-commerce website to the next level.
                                I have faced several challenges like improving responsiveness, bringing back the Odoo standard features. 
                                I also had the chance to work with other departments such as HR to build much needed tools in Odoo.
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            08/2015 - 04/2018
                        </div>
                        <div className="right-column">
                            <strong>Odoo Developer</strong> <span className="badge badge-orange">employee</span><br/>
                            <i>Niboo, Brussels, Belgium</i>
                            <div className="job-description">
                                As an Odoo developer I have had the chance to work on several Odoo projects scaling from small startup ERP tweaking to big company completely new features building on top of the Odoo solution.
                                During my experience at Niboo, I came across a load of various technical and functional challenges. It has been a very enriching experience to work with a talented team.
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            05/2015 - 08/2015
                        </div>
                        <div className="right-column">
                            <strong>Logistics Technician</strong> <span className="badge badge-green">student-job</span><br/>
                            <i>Norel, Zellik, Belgium</i>
                            <div className="job-description">
                                Mostly handling day to day picking operations for the customers of Norel. I also had the opportunity to do some receipt operations.
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            02/2015 - 05/2015
                        </div>
                        <div className="right-column">
                            <strong>IT Trainee</strong> <span className="badge badge-blue">internship</span><br/>
                            <i>Proximus, Liège, Belgium</i>
                            <div className="job-description">
                                During my traineeship, I implemented a custom Excel report generating tool in VBA for the Liege area outsourcing division. I learned VBA and developed the tool from scratch. I linked the solution to several Access databases and simplified the report generation with a GUI. What used to take a day per month now takes 10 minutes.
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            09/2014 - 09/2014
                        </div>
                        <div className="right-column">
                            <strong>Customer Service Employee</strong> <span className="badge badge-green">student-job</span><br/>
                            <i>Edition Averbode/Erasme, Namur, Belgium</i>
                            <div className="job-description">
                                Mostly answering phone calls from customer who wanted to renew their subscription for the coming school year.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experiences;
  