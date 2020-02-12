import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Card } from 'react-bootstrap';

class SearchPage extends Component {
    state = {  }

    componentDidMount() {
        this.props.setCurrentPage("search");
        this.props.setSearchTerm("all");
    }
    
    renderList(itemList, count){

        return (
            <div className="results-wrapper" style={{marginBottom: ".7em"}}>
                {count <=0 ? null : itemList.map(item => {  
                if (item.title) {
                    return (
                        <a key={item.title + item.class} className={item.class} href={item.url} style={{color: "black", textDecoration: "none"}}>
                            <Card >
                                {item.imageUrl ? <img src={item.imageUrl} alt="no show" /> : null }
                                <div className="card-content">
                                <div className="title">
                                    <h3>{item.title}</h3>{item.icon ? <i class={item.icon}></i> : null}
                                </div>
                                {item.subTitle ? <div className="sub-title">
                                    {item.subTitle}
                                </div>: null}
                                {item.url ? <div className="url">
                                    {item.url}
                                </div> : 
                                <div className="url">
                                    {item.localUrl}
                                </div>}
                                </div>
                            </Card>
                        </a>
                    )
                } else {
                    return item
                }
            })}
            </div>
        )
    }

    render() { 
        const renderContent = () => {
            const newList = []
            const newList2 = []
            const newList3 = []
            const newList4 = []
            const newList5 = []

            this.props.resumeData.resumeItems.map(item => {
                if (this.props.main.searchTerm === null)
                 {
                    if (newList.includes("no search term was entered")){
                    } else {
                        newList.push("no search term was entered")
                    }
                } else 
                if (this.props.main.searchTerm.toLowerCase() === "all") {
                    this.props.resumeData.resumeItems.map(item => {
                        if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                        } else {
                            newList2.push(item)
                        }
                        return newList
                    })
                } else
                if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                } else
                if (this.props.main.searchTerm === item.title){
                    if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                    } else {
                        newList2.push(item)
                    }
                } 
                else 
                if (this.props.main.searchTerm.toLowerCase() === item.title.toLowerCase()){
                    if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                    } else {
                        newList3.push(item)
                    }
                } 
                else 
                if (item.title.includes(this.props.main.searchTerm)){
                    if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                    } else {
                        newList3.push(item)
                    }
                } 
                else 
                {
                    item.keyWords.filter(keyWord => {
                         if (item.title === this.props.main.searchTerm && this.props.main.searchTerm === keyWord){
                            if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                            } else {
                                newList.push(item)
                            }
                        } 
                        if (item.title.includes(this.props.main.searchTerm) && this.props.main.searchTerm === keyWord){
                            if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                            } else {
                                newList.push(item)
                            }
                        }
                        if (this.props.main.searchTerm === keyWord){
                            if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                            } else {
                                newList.push(item)
                            }
                        }
                        return newList
                    })
                }
                return newList
            })
            const totalCount = (newList.length + newList2.length + newList3.length) 
            
            if (totalCount <= 0){
                return "your search returned no results"
            } else {
                return [
                    this.renderList(newList, totalCount),
                    this.renderList(newList2, totalCount),
                    this.renderList(newList3, totalCount)
                ]
            }
        }
        return ( 
            <div className="search-page" style={{color: "white", marginTop: "3em",display: "grid", justifyContent: "center"}}>
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