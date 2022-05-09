import React, { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route, Link, BrowserRouter, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Register from "./components/signup.component";
import Home from "./components/home.compoenent";
import Profile from "./components/profile.component";
import { logout } from "./action/auth";
import { clearMessage } from "./action/message";
import { useDispatch } from "react-redux";

function App(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  }
  return (
    
    <div className="App">
      <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
        </div>
        <div className="navbar-nav ml-auto">
        <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={handleClick}>
                    LogOut
                  </a>
                </li>
          </div>
      </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}


function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(App);
