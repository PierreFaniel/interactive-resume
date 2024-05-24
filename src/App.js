import React, { Component } from 'react';
import './App.css';
import Cover from './Cover';
import Profile from './Profile';
import Experiences from './Experiences';
import Education from './Education';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover/>
        <Profile/>
        <Experiences/>
        <Education/>
        <Skills/>
        <Hobbies/>
        <Contact/>
      </div>
    );
  }
}

export default App;
