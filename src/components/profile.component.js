import React, { Component, useState } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { user:currentUser } = this.props;
    // const currentUser=JSON.stringify(localStorage.getItem('user'));
    console.log('userlis',currentUser)
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
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
