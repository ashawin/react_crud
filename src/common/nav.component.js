import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../action/auth";
import { useDispatch } from "react-redux";
const Navbar = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>

        {props.isLoggedIn ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={handleClick}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto ">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
