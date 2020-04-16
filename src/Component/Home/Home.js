import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homeContainer">
      <Nav></Nav>
      <img
        className="home-img-right"
        src={require("../../resources/images/Mask Group 1.png")}
        alt="Display Chair"
      />
      <div className="home-left">
        <div className="home-left-text">
          <h1>Your New Smile Starts Here</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            repellendus aut hic id rem velit cumque, commodi excepturi aperiam
            quibusdam odio iusto adipisci, quia dolorum labore cupiditate
            repudiandae. Repellat, odio.
          </p>
          <Link to="/appointment" className="btnAppointment">
            GET APPOINTMENT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
