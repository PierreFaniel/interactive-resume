import React, { Component } from 'react';

class Education extends Component {
    render(){
        return(
            <section id="educationSection" className="container education">
                <h2>Education</h2>
                <div className="experience-item">
                    <div className="left-column">
                        2012 - 2015
                    </div>
                    <div className="right-column">
                        <strong>Bachelor in Management IT</strong> <span className="badge badge-green">college</span><br/>
                        <i>Henallux, Namur, Belgium</i>
                    </div>
                </div>
                <div className="experience-content">
                    <div className="experience-item">
                        <div className="left-column">
                            2011 - 2012
                        </div>
                        <div className="right-column">
                            <strong>Bachelor in Computer Science</strong> <span className="badge badge-orange">university</span><br/>
                            <i>Université de Namur, Namur, Belgium</i>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            02/2011 - 06/2011
                        </div>
                        <div className="right-column">
                            <strong>English - Cambridge FCE Level (B+ Grade)</strong> <span className="badge badge-blue">language</span><br/>
                            <i>EF New York, Tarrytown, NY, United States</i>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="left-column">
                            09/2010 - 01/2011
                        </div>
                        <div className="right-column">
                            <strong>Dutch - B1 Level</strong> <span className="badge badge-blue">language</span><br/>
                            <i>EF Antwerp, Antwerp, Belgium</i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;
  