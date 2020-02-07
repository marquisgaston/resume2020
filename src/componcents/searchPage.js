import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchPage extends Component {
    state = {  }

    componentDidMount() {
        this.props.setCurrentPage("search");
    }
    render() { 
        const list = ["github", "react", "python", "node", "node.js", "node js"]

        const renderContent = () => {
            if (list.includes(this.props.searchTerm)){
                if (this.props.searchTerm.toLowerCase() === "react" | "reactjs" | "react.js" ){
                    return "true"
                }
            } else {
                return
            }
        }
        return ( 
            <div style={{color: "white", marginTop: "3em",display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", maxWidth: "90vw", justifyContent: "center", alignItems: "center"}}>Search Term: {this.props.searchTerm ? this.props.searchTerm : null}</div>
                {renderContent()}
            </div>
         );
    }
}
function mapStateToProps (state) {
    return state.main
}

SearchPage = connect(mapStateToProps, actions)(SearchPage)
 
export default SearchPage;