import React, { Component } from 'react';
import './Skills.css';

const SkillBar = ({name, percentage}) => (
    <div className="skill">
        <strong>{name}</strong>
        <div className="skill-bar">
            <div className="bar-completion" style={{width: `${percentage}%`}}>
                <span>{percentage} %</span>
            </div>
        </div>
    </div>
)

class Skills extends Component {
    render(){
        return (
            <section id="skillsSection" className="container skills">
                <h2>Technical Skills</h2>
                <div className="skill-group">
                    <SkillBar name="HTML/CSS" percentage="100"/>
                    <SkillBar name="Python" percentage="100"/>
                    <SkillBar name="jQuery" percentage="100"/>
                    <SkillBar name="Git" percentage="100"/>
                    <SkillBar name="Odoo" percentage="90"/>
                    <SkillBar name="Bootstrap" percentage="90"/>
                    <SkillBar name="JavaScript" percentage="80"/>
                    <SkillBar name="SQL" percentage="75"/>
                    <SkillBar name="Unix" percentage="55"/>
                    <SkillBar name="React" percentage="50"/>
                    <SkillBar name="Docker" percentage="30"/>
                    <SkillBar name="Nginx" percentage="30"/>
                </div>
                <h2>Language Skills</h2>
                <div className="skill-group">
                    <SkillBar name="French" percentage="100"/>
                    <SkillBar name="English" percentage="90"/>
                    <SkillBar name="Dutch" percentage="50"/>
                    <SkillBar name="German" percentage="25"/>
                </div>
            </section>
        )
    }
}

export default Skills;
  