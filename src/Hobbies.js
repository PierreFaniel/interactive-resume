import React, { Component } from 'react';
import './Hobbies.css';
import travel_logo from './logos/travel.png';
import hiking_logo from './logos/hiking.png';
import music_logo from './logos/music.png';
import photography_logo from './logos/photography.png';

class Hobbies extends Component {
    render(){
        return (
            <section id="hobbiesSection" className="container hobbies">
                <h2>My Hobbies</h2>
                <div className="hobbies-list">
                    <div className="hobby-item">
                        <img src={travel_logo} alt="Travel"/>
                        <h3>Travel</h3>
                    </div>
                    <div className="hobby-item">
                        <img src={hiking_logo} alt="Hiking"/>
                        <h3>Hiking</h3>
                    </div>
                    <div className="hobby-item">
                        <img src={photography_logo} alt="Photography"/>
                        <h3>Photography</h3>
                    </div>
                    <div className="hobby-item">
                        <img src={music_logo} alt="Music"/>
                        <h3>Music</h3>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hobbies;
