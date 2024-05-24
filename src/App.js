import React, { Component } from 'react';
import './App.css';
import Cover from './Cover';
import Profile from './Profile';
import Experiences from './Experiences';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover/>
        <Profile/>
        <Experiences/>
        {/*<Abilities/>
        <Projects/>
        <Contact/> */}
      </div>
    );
  }
}

export default App;
