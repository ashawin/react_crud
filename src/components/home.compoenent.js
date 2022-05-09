import React, { Component } from "react";
import { Routes, Route, Link, BrowserRouter, Router } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props)
    }
    render(){

       return <header className="App-header">

          <p>
           This is test for login
          </p>
          <Link
           to={"/login"} className="nav-link">
            Login
          </Link>
        </header>
    };
}
export default Home;