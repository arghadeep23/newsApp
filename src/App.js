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
  
  c='Argha'
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News country={"in"} category={"general"} pageSize={6}/>}/>
          <Route exact path="/entertainment" element={<News country={"in"} category={"entertainment"} pageSize={6}/>}/>
          <Route exact path="/sports" element={<News country={"in"} category={"sports"} pageSize={6}/>}/>
          <Route exact path="/science" element={<News country={"in"} category={"science"} pageSize={6}/>}/>
          <Route exact path="/technology" element={<News country={"in"} category={"technology"} pageSize={6}/>}/>
          <Route exact path="/business" element={<News country={"in"} category={"business"} pageSize={6}/>}/>
        </Routes>
        
      </Router>
    )
  }
}
