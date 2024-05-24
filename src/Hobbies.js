import React, { Component } from 'react';
import './Hobbies.css';
import travel_logo from './logos/travel.png';
import trekking_logo from './logos/trekking.png';
import baseball_logo from './logos/baseball.png';
import photography_logo from './logos/photography.png';
import guitar_logo from './logos/guitar.png';

class Hobbies extends Component {
    render(){
        return (
            <div className="container hobbies">
                <h2>My Hobbies</h2>
                <div className="hobbies-list">
                    <div className="hobby-item">
                        <img src={travel_logo} alt="Travel"/>
                        <h3>Travel</h3>
                    </div>
                    <div className="hobby-item">
                        <img src={trekking_logo} alt="Trekking"/>
                        <h3>Trekking</h3>
                    </div>
                    <div className="hobby-item">
                        <img src={photography_logo} alt="Photography"/>
                        <h3>Photography</h3>
                    </div>
                    <div className="hobby-item">
                        <img src={baseball_logo} alt="Baseball"/>
                        <h3>Baseball</h3>
                    </div>
                    <div className="hobby-item">
                        <img src={guitar_logo} alt="Guitar"/>
                        <h3>Guitar</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hobbies;
