import React, { Component } from 'react';

import Hometabs from './homeTabs';
import OtherTabs from './tabs';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Homepage extends Component {
    state = {  }

    componentDidMount() {
        this.props.setCurrentPage("homepage");
    }
    render() { 
        return ( 
            <div className="homepage">
                <Hometabs/>
                <OtherTabs/>

            </div>
         );
    }
}
function mapStateToProps (state) {
    return state
}

Homepage = connect(mapStateToProps, actions)(Homepage)
 
export default Homepage;