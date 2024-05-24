import React, { Component } from 'react';
import cover from './cover.jpg';
import './Cover.css';
class Cover extends Component {
    render(){
        return (
            <div className="cover">
                <img className="cover-picture" src={cover} alt="© Pierre Faniel - Belgium, 2017"/>
                <div className="cover-title">
                    <h1>Pierre Faniel</h1>
                    <h3>Software Developer</h3>
                </div>
                <div className="icon-scroll"/>
            </div>
        )
    }

}

export default Cover;
  