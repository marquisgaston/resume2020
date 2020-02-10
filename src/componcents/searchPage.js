import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchPage extends Component {
    state = {  }

    componentDidMount() {
        this.props.setCurrentPage("search");
    }
    render() { 

        const renderContent = () => {
            const newList = []
            const newList2 =[]
            this.props.resumeData.resumeItems.map(item => {
                if (this.props.main.searchTerm === null)
                 {
                    if (newList.includes("no search term was entered")){
                        return 
                    } else {
                        newList.push("no search term was entered")
                        return
                    }
                } else 
                if (newList.includes(item)){
                    return
                } else
                item.keyWords.filter(keyWord => {
                    if (item.title === this.props.main.searchTerm && this.props.main.searchTerm === keyWord){
                        if (newList.includes(item)){
                            return 
                        } else {
                            newList.push(item)
                            return
                        }
                    } 
                    if (item.title.includes(this.props.main.searchTerm) && this.props.main.searchTerm === keyWord){
                        if (newList.includes(item)){
                            return 
                        } else {
                            newList.push(item)
                            return
                        }
                    }
                    if (this.props.main.searchTerm === keyWord){
                        if (newList.includes(item)){
                            return 
                        } else {
                            newList.push(item)
                            return
                        }
                    }
                })
                if (this.props.main.searchTerm === item.title){
                    if (newList.includes(item)){
                        return 
                    } else {
                        newList.push(item)
                        return
                    }
                } 
                else 
                if (item.title.includes(this.props.main.searchTerm)){
                    if (newList.includes(item)){
                        return 
                    } else {
                        newList.push(item)
                        return
                    }
                } 
                else 
                {
                    if (newList.includes("your search returned no results")){
                        return 
                    } else {
                        newList.push("your search returned no results")
                        return
                    }
                }
            })

            return (
                <div>
                    {newList.map(item => {
                    return item.title
                })}
                </div>
            )
        }
        return ( 
            <div style={{color: "white", marginTop: "3em",display: "grid", justifyContent: "center"}}>
                <div style={{display: "flex", maxWidth: "90vw", justifyContent: "center", alignItems: "center"}}>Search Term: {this.props.main.searchTerm ? this.props.main.searchTerm : null}</div>
                <div className="search-page-results">
                    {renderContent()}
                </div>
            </div>
         );
    }
}
function mapStateToProps (state) {
    return state
}

SearchPage = connect(mapStateToProps, actions)(SearchPage)
 
export default SearchPage;