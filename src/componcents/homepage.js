import React, { Component } from 'react';
import { FormControl, Button, Carousel } from 'react-bootstrap';
import MuiCard from './muiCard';

import { connect } from 'react-redux';
import * as actions from '../actions';
import SimpleTabs from './tabs';
import history from '../history';

class Homepage extends Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
    }
    state = { 
        searchText: ""
     }
    componentDidMount(){
        this.props.setCurrentPage("homepage");
    }

    handleChange(event) {
        this.setState ({
            [event.target.name]: event.target.value
        });
    }

    handleClick = () => {
        if (this.state.searchText !== null && this.state.searchText.length > 0){
            this.props.setSearchTerm(this.state.searchText);
            history.push('/search')
        } else {
            return
        }
    }

    renderQuickSearch = () => {
        if (this.state.searchText.length > 0){
            const one = this.state.searchText.toLowerCase().split("")
            const newList = []
            const newList2 =[]

            this.list.map(item =>{
                if (newList.includes(item)){
                    return
                } else {

                    if (item.title.toLowerCase().includes(this.state.searchText.toLowerCase())){
                        newList.push(item)
                    }

                     one.filter(listItem => {
                        if (item.title.includes(listItem)){
                            if (newList2.includes(item) | newList.includes(item)){
                                return
                            } else {
                                newList2.push(item)
                            }
                    }})

                }
            })

            return (
                <div className="quick-search">
                    {newList.map(item => {
                        console.log("item", item)
                        return (
                            <div className="quick-search-item">
                                <a className="quick-search-link" href={`https://www.${item.url}`}>
                                <div className="title">
                                    {item.title}
                                </div>
                                {item.subTitle ? <div className="sub-title">
                                    {item.subTitle}
                                </div> : null}
                                {item.url ? <div className="url">
                                    {item.url}
                                </div> : null}                                
                                </a>
                            </div>
                        )
                    })}
                    {newList2.map(item => {
                        return (
                            <div>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return
        }
    }

    list = [
        {
            title: "Github",
            subTitle: "My Github Page",
            url: "github.com/marquisgaston"
        },
        {
            title: "React"
        },
        {
            title: "Node.JS"
        },
        {
            title: "Python"
        },
    ];

    render() { 
        
        return ( 
           <div className="homepage">
                <div style ={{ display: "grid", justifyContent: "center", alignContent: "center", marginTop: "3.5em", color: "white", backgroundImage: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=photo-of-person-typing-on-computer-keyboard-735911.jpg&fm=jpg"}} >
               <i style={{marginBottom: "1em"}} class="fab fa-monero"></i>                
                <div className="main-title display-4">I'm Marquis Gaston!</div>
                <p style={{marginBottom: "2em"}} class="lead">I'm your next Full-Stack/Front-End/Back-End Developer based out of NW Ohio/Toledo</p>
                
                <h3>Try typing a keyword to see what I can do for you!</h3>
                <Carousel className="skill-carousel" style={{margin: ".5em 0"}}>
                    {this.list.map(item => {
                        return (
                            <Carousel.Item key={item}>
                                {item.title}
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <form className="search-wrapper" onSubmit={this.handleClick} style={{display: "flex", justifyContent: "center", marginTop: ".7em"}}>
                <FormControl name="searchText" value={this.state.searchText} onChange={this.handleChange} type="text" placeholder="Search" className="mr-sm-3" />
                <Button className="search-button" variant="outline-success" style={{color: "white", borderColor: "white", backgroundColor: "#$main-blue"}} onClick={this.handleClick}>Search</Button>
                </form>
                <div className="quick-search-wrapper">
                    {this.renderQuickSearch()}
                </div>
                <p>Or...</p>
                <p>Scroll down to learn more About Me...</p>
                <i class="fas fa-chevron-down"></i>
            </div>
            
            <MuiCard/>
            <SimpleTabs/>
           </div>
         );
    }
}
function mapStateToProps (state) {
    return state.main
}

Homepage = connect(mapStateToProps, actions)(Homepage)
 
export default Homepage;