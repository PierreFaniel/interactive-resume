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
            <div className="container skills">
                <h2>Technical Skills</h2>
                <div>
                    <SkillBar name="HTML" percentage="90"/>
                    <SkillBar name="XML" percentage="90"/>
                    <SkillBar name="CSS" percentage="90"/>
                    <SkillBar name="Python" percentage="80"/>
                    <SkillBar name="jQuery" percentage="80"/>
                    <SkillBar name="JavaScript" percentage="75"/>
                    <SkillBar name="Git" percentage="65"/>
                    <SkillBar name="Odoo" percentage="55"/>
                    <SkillBar name="OS X" percentage="50"/>
                    <SkillBar name="SQL" percentage="40"/>
                    <SkillBar name="Unix" percentage="35"/>
                    <SkillBar name="React" percentage="30"/>
                    <SkillBar name="Docker" percentage="20"/>
                    <SkillBar name="Nginx" percentage="20"/>
                </div>
                <h2>Language Skills</h2>
                <div>
                    <SkillBar name="French" percentage="100"/>
                    <SkillBar name="English" percentage="90"/>
                    <SkillBar name="Dutch" percentage="30"/>
                    <SkillBar name="German" percentage="10"/>
                </div>
            </div>
        )
    }
}

export default Skills;
  