import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import Homepage from './homepage';
import NavbarComponent from './navbar';
import history from '../history';
import SearchPage from './searchPage';
import NoMatch from './noMatch';

class Resume extends Component {
    
    render() { 
        return ( 
            <div>
                <Router history={history}>
                    <NavbarComponent/>
                    <Switch>
                        <Route path='/' exact component={Homepage}/>
                        <Route path="/search" exact component={SearchPage}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Router>
            </div>
         );
    }
}
 
export default Resume;