import { Component } from 'react';
import CoverPicture from '@/assets/images/cover.jpg';
import '@/components/Cover.css';

export default class Cover extends Component {
  render(){
    return (
      <div className="cover">
        <img className="cover-picture" src={CoverPicture} alt="© Pierre Faniel - Montréal, Canada, 2023"/>
        <div className="cover-title">
          <h1>Pierre Faniel</h1>
          <h3>Staff Full Stack Developer</h3>
        </div>
        <div className="icon-scroll"/>
      </div>
    )
  }
}
