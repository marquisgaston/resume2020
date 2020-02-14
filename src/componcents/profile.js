import React, { Component } from 'react';

import profile from '../images/profile.jpg';

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
           <div>
                <div className="profile-header">
                    <div className="profile-bg">
                        <div>

                        </div>
                    </div>
                    <div className="profile-content" style={{marginBottom: "3em"}}>
                        <div>
                            <h2 className="name" >I'm Marquis J Gaston.</h2>
                        </div>
                        <h2 className="title1">Full Stack Developer</h2>
                        <h4>Back End - Front End - Python - React - Git - Javascript</h4>
                    </div>  
                </div>
                <div className="content-wrapper">
                    <div className="content" style={{display: "flex"}}>
                        <img src={profile} style={{borderRadius: "15px"}} alt=""/>
                        <div className="info">
                            <p>Creative by night, Problem-Solver by Day. I like to take the skill I already have and find ways to help others. Whether that's simply connecting people and services, building new features or imagining how something could be done better, functionality is my bread and butter</p>
                            <div>
                                <h5>Graudate from Bottega Tech's Full Stack Program</h5>
                                <h5>MarquisGaston23@gmail.com</h5>
                                <h5>567 - 343 - 3654</h5>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
         );
    }
}

export default Profile;