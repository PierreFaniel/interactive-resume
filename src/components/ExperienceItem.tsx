import { Component } from "react";
import "@/components/ExperienceItem.css";

type Props = {
  badgeColor: string;
  company?: string;
  companyLink?: string;
  employementDescription: string;
  endDate: string;
  jobDescription?: string;
  jobHighlights?: Array<string>;
  jobTitle: string;
  location: string;
  skills?: Array<string>;
  startDate: string;
};

export default class ExperienceItem extends Component<Props> {
  renderLocation() {
    if (this.props.company && this.props.companyLink) {
      return (
        <i>
          <a
            className="company-link"
            href={this.props.companyLink}
            target="_blank"
          >
            {this.props.company}, {this.props.location}
          </a>
        </i>
      );
    }
    return <i>{this.props.location}</i>;
  }
  renderSkills() {
    if (this.props.skills) {
      return (
        <div className="skills-used">
          <i>Skills: </i>{this.props.skills.join(" | ")}
        </div>
      );
    }
    return "";
  }
  renderJobHighlights() {
    if (this.props.jobHighlights) {
      return this.props.jobHighlights.map((o) => <li key={o}>{o}</li>);
    }
    return "";
  }
  renderJobDescription() {
    if (this.props.jobDescription) {
      return (
        <div className="job-description">
          {this.props.jobDescription}
          <ul className="tasks-description">{this.renderJobHighlights()}</ul>
        </div>
      );
    }
    return "";
  }
  render() {
    return (
      <div className="experience-item">
        <div className="left-column">
          {this.props.startDate} - {this.props.endDate}
        </div>
        <div className="right-column">
          <strong>{this.props.jobTitle}</strong>
          <span className={`badge badge-${this.props.badgeColor}`}>
            {this.props.employementDescription}
          </span>
          <br />
          {this.renderLocation()}
          {this.renderJobDescription()}
          {this.renderSkills()}
        </div>
      </div>
    );
  }
}
