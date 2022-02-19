import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import workoutImage from "../assets/workout.svg";

const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <p className="header__text">
          TRACK YOUR <span className="text-accent">WEIGHT</span>
          <br /> A LOT
          <br />
          <span className="text-accent">EASIER.</span>
        </p>
      </header>
      <div className="home__svgWrapper">
        <img src={workoutImage} className="home__svg" alt="Working out man" />
      </div>
      <Link to="/register">
        <button className="button button-accent">REGISTER NOW</button>
      </Link>
    </div>
  );
};

export default Home;
