import React, { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route, Link, BrowserRouter, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Register from "./components/signup.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import Navbar from "./common/nav.component";
import { logout } from "./action/auth";
import { clearMessage } from "./action/message";
import { useDispatch } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLoggedIn={props.isLoggedIn} />
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
  const { user, isLoggedIn } = state.auth;
  return {
    isLoggedIn,
    user,
  };
}
export default connect(mapStateToProps)(App);
