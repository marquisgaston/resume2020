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
            const newList = []
            const newList2 =[]
            if (list.includes(this.props.searchTerm)){
                this.props.resume.Data.resumeItems.map(item =>{
                    if (newList.includes(item)){
                        return
                    } else {
    
                        if (item.title.toLowerCase().includes(this.state.searchText.toLowerCase())){
                            newList.push(item)
                        } else {
                            return
                        }
                        
                        
                    if (this.state.searchTerm !== null){
                        const one = this.state.searchText.toLowerCase().split("")
                         one.filter(listItem => {
                            if (item.title.includes(listItem)){
                                if (newList2.includes(item) | newList.includes(item)){
                                    return
                                } else {
                                    newList2.push(item)
                                }
                        }})
                    } else {
                        return
                    }
    
                    }
                })
            } else {
                return
            }
        }
        return ( 
            <div style={{color: "white", marginTop: "3em",display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", maxWidth: "90vw", justifyContent: "center", alignItems: "center"}}>Search Term: {this.props.main.searchTerm ? this.props.main.                                                                                                searchTerm : null}</div>
                {renderContent()} 
            </div>
         );
    }
}
function mapStateToProps (state) {
    return state
}

SearchPage = connect(mapStateToProps, actions)(SearchPage)
 
export default SearchPage;