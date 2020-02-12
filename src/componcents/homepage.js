import React, { Component } from 'react';

import Hometabs from './homeTabs';
import MuiCard from './muiCard';
import OtherTabs from './tabs';

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="homepage">
                <Hometabs/>
                <MuiCard/>
                <OtherTabs/>

            </div>
         );
    }
}
 
export default Homepage;