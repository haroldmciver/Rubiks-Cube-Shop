import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/wallpaper.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Rubik's Cube Shop </h1>
        <p> Can you solve the puzzle?</p>
        <Link to="/shop">
          <button> SHOP NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;