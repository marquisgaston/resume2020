import React, { Component } from 'react';
import { Card } from '@material-ui/core';

import bottega1 from '../images/bottega1.png';
import minnmax1 from '../images/minnmax1.png';
import bottega2 from '../images/bottega2.png';

class Projects extends Component {
    state = {  }
    render() { 
        const projects = [
            {
                title: "My Botegga Capstone Project - the NEW! MinnMax.com",
                description: "A new content company popped on the scene and I didn't think they had a 'home' for the fans, so I built one",
                url: "minnmax.netlify.com",
                img: minnmax1
            },
            {
                title: "My Bottega Portfolio Project",
                description: "This is the portfolio project from bottega showcasing my skills with apis, CRUD, react, redux, react-router, javascript.",
                url: "https://mjg-bottega-react-portfolio.herokuapp.com/",
                img: bottega1
            },
            {
                title: "Bottega DailySmarty Project",
                description: "This is the dailysmarty project from bottega showcasing my skills more specifically with Queries and parsing through data but also with apis, CRUD, react, redux, react-router, javascript.",
                url: "https://app.netlify.com/start/repos/marquisgaston%2FDailySmartyUI",
                img: bottega2
            },
        ]
        return ( 
            <div>
                {projects.map(item => {
                    return (
                        <div className="project-item" style={{display: "flex", flexDirection: "column" , justifyContent: "space-around", alignItems: "center", margin:"2em 0"}}>
                            <Card className="project-card" style={{padding: "2em 0", maxWidth: "90vw", width: "49em"}}>                                
                            <h4>{item.title}</h4>
                            <div style={{display: 'grid', justifyContent: "center"}}>
                                <img src={item.img} alt=""/>
                                <div style={{textDecoration: "none"}}>{item.url}</div>
                            </div>
                            <p>{item.description}</p>
                            </Card>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Projects;