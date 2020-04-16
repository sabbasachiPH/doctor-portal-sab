import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="">
        About
      </Link>
      <Link className="nav-item" to="">
        Dental Services
      </Link>
      <Link className="nav-item" to="/doctor/shortList">
        Short List For Doctor
      </Link>
      <Link className="nav-item" to="">
        Blog
      </Link>
      <Link className="nav-item" to="">
        Contact Us
      </Link>
      <Link className="nav-item" to="/doctor/AllAppointments">
        Doctor's Dashboard
      </Link>
    </div>
  );
};

export default Nav;
