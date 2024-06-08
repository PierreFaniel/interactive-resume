import { Component } from "react";
import ExperienceItem from "@/components/ExperienceItem";

export default class Experience extends Component {
  render() {
    return (
      <section id="experienceSection" className="container experience">
        <h2>Work Experience</h2>
        <ExperienceItem
          badgeColor="orange"
          company="AlayaCare"
          companyLink="https://alayacare.ca/"
          employementDescription="full-time"
          endDate="12/2023"
          jobDescription="TODO"
          jobHighlights={[]}
          jobTitle="Senior Full Stack Developer"
          location="Montréal, Canada"
          startDate="10/2019"
          skills={[
            "Python 2 and 3: Flask",
            "JavaScript: VueJs, Jest, ES6",
            "PostgreSQL",
            "Docker",
            "CI/CD",
            "AWS",
            "IAM",
            "Terraform",
          ]}
        />
        <ExperienceItem
          badgeColor="orange"
          company="Microcom"
          companyLink="https://microcom.ca/"
          employementDescription="full-time"
          endDate="10/2019"
          jobDescription="After reloctating to Canada, Pierre took a small tenure with Microcom as an Odoo specialist. There he worked on several Odoo projects as well as helping with the maintenance with miscelaneous IT projects."
          jobHighlights={[
            "Self-directed learning of Angular and MongoDb for maintenance and improvement of a CRM application",
            "Maintained and implemented custom solution integrated with Odoo ERP",
          ]}
          jobTitle="Senior Full Stack Developer"
          location="Montréal, Canada"
          startDate="08/2019"
          skills={[
            "Odoo",
            "Python 2.7",
            "jQuery",
            "OdooJs",
            "HTML + CSS",
            "PostrgeSQL",
            "Bash",
            "AngularJS",
            "MongoDB",
          ]}
        />
        <ExperienceItem
          badgeColor="grey"
          employementDescription="pause"
          endDate="08/2019"
          jobTitle="Reolcation to Canada"
          location="Montréal, Québec, Canada"
          startDate="06/2019"
        />
        <ExperienceItem
          badgeColor="orange"
          company="Niboo"
          companyLink="https://www.niboo.com/"
          employementDescription="full-time"
          endDate="05/2019"
          jobDescription="After a short tenure at Stanler/Stella, Pierre came back to Niboo as a technical team leader. He managed a scrum team of 5 developers.  He lead and participated in several Odoo implementation projects. He also  trained developers with less experience."
          jobHighlights={[
            "Improved performances on complex Python background jobs reducing execution time from 2+ hours to under 3 minutes.",
            "Integrated tailored solutions into Odoo ERP for 20+ clients",
            "Drove dozens of technical trainings internally for less experienced developers (e.g. Odoo ERP basics, Git flow, accounting with Odoo)",
          ]}
          jobTitle="Senior Full Stack Developer"
          location="Brussels, Belgium"
          startDate="08/2018"
          skills={[
            "Odoo",
            "Scrum",
            "Python 2.7",
            "Celery",
            "jQuery",
            "OdooJs",
            "HTML + CSS",
            "PostrgeSQL",
            "Docker",
            "Bash",
          ]}
        />
        <ExperienceItem
          badgeColor="orange"
          company="Stanley/Stella"
          companyLink="https://www.stanleystella.com/"
          employementDescription="full-time"
          startDate="04/2018"
          jobDescription="As the sole in-house developer of Stanley/Stella, Pierre's main focuses were to improve the existing e-commerce website and ease the life of the company's other departments:"
          jobHighlights={[
            "Revamped of the e-commerce platform's responsivness, implementation of the designer's HTML mock ups.",
            "Update the physical clothing store's kiosk, which required learning Electron Js (react) autonomously",
            "Implemented a process of one-pager PDF product sheets generation based on the products' data from the ERP",
          ]}
          jobTitle="Full Stack Developer"
          location="Brussels, Belgium"
          endDate="08/2018"
          skills={[
            "Odoo",
            "Python 2.7",
            "jQuery",
            "OdooJs",
            "HTML + CSS",
            "PostrgeSQL",
            "Electron JS",
            "React",
          ]}
        />
        <ExperienceItem
          badgeColor="orange"
          company="Niboo"
          companyLink="https://www.niboo.com/"
          employementDescription="full-time"
          endDate="04/2018"
          jobDescription="Pierre was the first full-time employee and developer of Niboo. As a junior develeper out of college, he was a full time Odoo consultant on a yearlong e-commerce project. He then was an Odoo consultant on several smaller Odoo implementation and integration projects simultaneously."
          jobHighlights={[
            "Fully implemented a consultant placement platform built on top of the Odoo ERP in a month time",
            "Conducted multiple user trainings on the whole sales workflow with Odoo, from marketing to billing",
            "Succesfully formatted and imported 10+ new clients' production data into the new Odoo ERP instance",
          ]}
          jobTitle="Full Stack Developer"
          location="Brussels, Belgium"
          startDate="08/2015"
          skills={[
            "Odoo",
            "Python 2.7",
            "jQuery",
            "OdooJs",
            "HTML + CSS",
            "PostrgeSQL",
            "Bash",
          ]}
        />
        <ExperienceItem
          badgeColor="blue"
          company="Proximus"
          companyLink="https://www.proximus.be/"
          employementDescription="internship"
          endDate="05/2015"
          jobDescription="Implementation from the ground up of a custom Excel report generating tool in VBA for the outsourcing division of the Liège province, aggregating data from 3 databases"
          jobTitle="Software Development Intern"
          location="Liège, Belgium"
          startDate="01/2015"
          skills={["VBA", "Access SQL", "MS Access", "MS Excel"]}
        />
      </section>
    );
  }
}
