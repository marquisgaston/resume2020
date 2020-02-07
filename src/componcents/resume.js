import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import Homepage from './homepage';
import NavbarComponent from './navbar';
import history from '../history';
import Footer from './footer';
import SearchPage from './searchPage';

class Resume extends Component {
    
    render() { 
        return ( 
            <div>
                <Router history={history}>
                    <NavbarComponent/>
                    <Switch>
                        <Route path='/' exact component={Homepage}/>
                        <Route path="/search" component={SearchPage}/>
                    </Switch>
                </Router>
            </div>
         );
    }
}
 
export default Resume;