import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import './App.css';
import Cover from './Cover';
import Profile from './Profile';
import Experiences from './Experiences';
import Education from './Education';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Contact from './Contact';


const appSections = ['profileSection', 'experienceSection', 'educationSection', 'skillsSection', 'contactSection']
class App extends Component {
  scrollSpyElement = undefined;

  listenScrollEvent = e => {
    // Must be computed each time
    const coverHeight = document.querySelector('.cover').scrollHeight;
    if(window.scrollY > 30 + coverHeight){
      this.scrollSpyElement.classList.add('fixed');
    } else {
      this.scrollSpyElement.classList.remove('fixed');
    }
  }

  componentDidMount() {
    this.scrollSpyElement = document.querySelector('.scroll-spy');
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      // <div className={this.state.fixed ? "App fixed":"App"}>
      <div className="App">
        <div>
          <Cover/>
          <Profile/>
          <Experiences/>
          <Education/>
          <Skills/>
          <Hobbies/>
          <Contact/>
        </div>
        <Scrollspy items={appSections} currentClassName="is-current" className="scroll-spy">
          <li><a href="#profileSection">Profile</a></li>
          <li><a href="#experienceSection">Experience</a></li>
          <li><a href="#educationSection">Education</a></li>
          <li><a href="#skillsSection">Skills</a></li>
          <li><a href="#contactSection">Contact</a></li>
        </Scrollspy>
      </div>
    );
  }
}

export default App;
