import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
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
            searchKeyword: "",
            progress:0 
        }
    }
  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }
  handleSearch=(keyword)=>{
    this.setState({search:true,searchKeyword:keyword})
    console.log(`Keyword : ${keyword}`);
  }
  c='Argha'
  apiKey=process.env.REACT_APP_newsapp;
  render() {
    return (
      <Router>
        <Navbar handleSearch={this.handleSearch}/>
        <LoadingBar
        color='#d9ae30'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} country={"in"} category={"general"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} country={"in"} category={"entertainment"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} country={"in"} category={"sports"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} country={"in"} category={"science"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} country={"in"} category={"technology"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
          <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} country={"in"} category={"business"} pageSize={6} search={this.state.search} searchKeyword={this.state.searchKeyword}/>}/>
        </Routes>
        
      </Router>
    )
  }
}
