import React, { Component } from 'react';
import cover from './cover.jpg';
import './Cover.css';

export default class Cover extends Component {
  render(){
    return (
      <div className="cover">
        <img className="cover-picture" src={cover} alt="© Pierre Faniel - Montréal, Canada, 2023"/>
        <div className="cover-title">
          <h1>Pierre Faniel</h1>
          <h3>Senior Full Stack Developer</h3>
        </div>
        <div className="icon-scroll"/>
      </div>
    )
  }
}
