import React, { Component, useState } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";

class Profile extends Component {
  render() {
   
    const currentUser=JSON.parse(localStorage.getItem('user'));
    console.log('cur user',currentUser)
    return (
      <div className="container">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
       
      </div>
    );
  }
}
function mapStateToProps(state) {
 
  const { user } = state.auth
  return {
    user
  };
}
export default connect(mapStateToProps)(Profile);
