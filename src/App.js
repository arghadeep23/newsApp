import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor() {
        super();
        console.log('App.js constructor');
        this.state = {
            search:false,
            searchKeyword: "" 
        }
    }
  handleSearch=(keyword)=>{
    this.setState({search:true,searchKeyword:keyword})
    console.log(`Keyword : ${keyword}`);
  }
  c='Argha'
  render() {
    return (
      <Router>
        <Navbar handleSearch={this.handleSearch}/>
        <Routes>
          <Route exact path="/" element={<News country={"in"} category={"general"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/entertainment" element={<News country={"in"} category={"entertainment"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/sports" element={<News country={"in"} category={"sports"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/science" element={<News country={"in"} category={"science"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/technology" element={<News country={"in"} category={"technology"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/business" element={<News country={"in"} category={"business"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
        </Routes>
        
      </Router>
    )
  }
}
