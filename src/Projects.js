import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    render(){
        return (
            <section id="projectsSection"  className="container projects">
                <h2>Projects</h2>
                <div className="project">
                    <h4>Amnesty International Belgique Francophone - Odoo Implementation</h4>
                    <h6>06/2017 - Present</h6>
                    <div className="project-description">
                        Creation of a Fundraising app on top of Odoo, marketing and contact management modules specific development.
                        Importing data from the Data Factory into Odoo has also been one big and interesting challenge. 
                        We solved it using Celery and RabbitMQ to queue time and ressource consuming processes such as data imports.
                    </div>
                </div>
                <div className="project">
                    <h4>Stanley/Stella - Retail e-commerce website</h4>
                    <h6>04/2018 - 07/2018</h6>
                    <div className="project-description">
                        As a in-house Full Stack Developer, I was offered a bunch of different challenges to improve the e-commerce platform which is based on Odoo. 
                        I started by improving the website overall responsiveness by making it more mobile friendly.
                        I then worked on bringing back Odoo standard features that were lost during the last website's restyling.
                    </div>
                </div>
                <div className="project">
                    <h4>Stanley/Stella - Product information management tool</h4>
                    <h6>04/2018 - 07/2018</h6>
                    <div className="project-description">
                        During my time at Stanley/Stella, I also had the chances to work on the PIM (product information management) which is a custom Odoo app. 
                        I worked on making a completely automated product sheet which displays all the product information on a single page PDF file which will be made available to B2B customers.
                    </div>
                </div>
                <div className="project">
                    <h4>Skill at Click - Consultant and Client Portal implementation (MVP Phase)</h4>
                    <h6>03/2018 - 04/2018</h6>
                    <div className="project-description">
                        I have worked full time as a the sole Odoo developer for the skillsatclick.com project during a month. 
                        The goal was to have an MVP in order to show the added value of skillsatclick. I
                        t was a very interesting project for me as I was directly conversing with the founder of the platform. 
                        We worked in a very Agile way and usually doing sprints of one week but sometimes one day. 
                        I am proud of the result we were able to deliver in such a short period.
                    </div>
                </div>
                <div className="project">
                    <h4>Maison Dandoy - Odoo Implementation</h4>
                    <h6>01/2017 - Present</h6>
                    <div className="project-description">
                        Implementation of the Odoo ERP solution for Maison Dandoy: Accounting, sales and purchase flow, inventory management, manufacturing and point of sale. 
                        Connector app with Dandoy's craft e-commerce platform.
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;
