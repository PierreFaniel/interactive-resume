import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    render(){
        return (
            <section id="projectsSection"  className="container projects">
                <h2>Projects</h2>
                <div className="project">
                    <h4>Régie des énergies de Wavre (REW) - Portal forms</h4>
                    <h6>08/2018 - 05/2019</h6>
                    <div className="project-description">
                        Pierre has been assigned as the technical expert of the project to implement several forms on the website and the portal. 
                        He connected a form to another ERP's API in order to display the data of the electricity consumption for a given meter number.
                        An external design company succesfully collaborated with the Niboo team, adapting their mock-ups to fit the needs of Odoo's frontend framework upon Pierre's requests.
                        Allowed REW's product owner to re-use parts of the design using Odoo's CMS.
                    </div>
                </div>
                <div className="project">
                    <h4>Bell Racing Helmets - Complete Odoo implementation</h4>
                    <h6>01/2017 - 05/2019</h6>
                    <div className="project-description">
                        Pierre worked in close collaboration with the customer's Product Owner, advising both technically and functionally on the best suited solution.
                        He was the only developer of the project, handling development, deployment and support in time of crisis.
                        This poject has been challenging for Pierre as he faced an unprecedented amount of data, slowing down the whole platform.
                        Together with a team of performance experts from Odoo SA, he improved the processes execution time by a great deal.
                        Integration with external APIs such as UPS and Authorize.net
                    </div>
                </div>
                <div className="project">
                    <h4>Amnesty International Belgique Francophone - Fundraising and mass mailing implementation</h4>
                    <h6>06/2017 - 02/2019</h6>
                    <div className="project-description">
                        Creation of a tailor made fundraising app on top of Odoo, alteration of marketing and contact management module.
                        Importing data from the data factory into Odoo has been an interesting challenge that was solved using Celery and RabbitMQ to queue time and ressources consuming processes such as data imports.
                        Linked Odoo with the SendInBlue API to allow Amnesty to handle their mailing campaigns directly from the Odoo backend interface.
                    </div>
                </div>
                <div className="project">
                    <h4>Stanley/Stella - Retail e-commerce website</h4>
                    <h6>04/2018 - 07/2018</h6>
                    <div className="project-description">
                        Greatly improved the responsiveness of the based on Odoo e-commerce platform for every devices.
                        Ensured to be able to use standard Odoo e-commerce features and CMS of Odoo as the previous implementer didn't take that into account when first implementing the platform.
                        Researched for the best next platform to host Stanley/Stella's e-commerce website.
                    </div>
                </div>
                <div className="project">
                    <h4>Skill at Click - User portal implementation (MVP Phase)</h4>
                    <h6>03/2018 - 04/2018</h6>
                    <div className="project-description">
                        Pierre worked closely during a month with the customer to ensure a fast deployement of the platform.
                        Implementation of the consultant placement website was done using Bootstrap 3, jQuery and Odoo's website framework.
                        This was a challenging project as there were a lot of complex forms to implement and a very short deadline. 
                        The product owner and Pierre worked efficiently together and managed to deliver a working minimum viable product in a month.
                    </div>
                </div>
                <div className="project">
                    <h4>Maison Dandoy - Complete Odoo implementation</h4>
                    <h6>08/2016 - 03/2018</h6>
                    <div className="project-description">
                        Implementation of the Odoo ERP solution for Maison Dandoy, a biscuit manufacturer: customization of accounting, sales and purchase, inventory management, manufacturing and point of sales modules.
                        Pierre trained several of Maison Dandoy's team members to manage their accounting, sales and purchase with Odoo.
                        Established a link between Maison Dandoy's craft e-commerce platform and Odoo.
                        Support provided on several crisis scenarios.
                    </div>
                </div>
                <div className="project">
                    <h4>Atos Worldline - Quotion creation tool</h4>
                    <h6>08/2015 - 07/2016</h6>
                    <div className="project-description">
                        Pierre worked on this large scale project as a junior developer full time for almost a year.
                        Together with a team of 3 developers, 1 project manager and 2 business developers, they managed to implement an intranet e-commerce like platform allowing Worldline's to create quotations.
                        The platform is based on Odoo but it only uses Odoo's Python routing framework, Odoo's frontend JavaScript framework and Bootstrap 3.
                        The project was a great success as the platform now allows a vendor to make a quote in 70% less time as the previous solution, mostly due to the solution's user-friendliness.
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;
