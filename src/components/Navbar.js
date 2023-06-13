
import React, { Component } from 'react'

export class Navbar extends Component {
  constructor() {
    super();
    console.log('Navbar constructor');
    this.state = {
      text: ""
    }
  }
  handleOnChange = (event) => {
    //console.log('On change');
    this.setState({ text: event.target.value })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.text);
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">NexusNews</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment">Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science">Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">Technology</a>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={this.handleOnSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.text}
                  onChange={this.handleOnChange} />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav></>
    )
  }
}

export default Navbar