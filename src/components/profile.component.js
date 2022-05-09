import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from "redux";
class Profile extends Component {
  render() {
    const { user } = this.props;
    const currentUser={};
    console.log('user',user)
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        
      
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth
  return {
    user,
  };
}
export default connect(mapStateToProps)(Profile);