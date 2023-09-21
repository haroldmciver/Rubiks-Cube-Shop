import React from "react";
import MultiplePizzas from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Hello!</p>
        <p>
        My name is Harold Mciver and I'm a dedicated Computer Science student at the University of South Florida with a passion for problem-solving and interactive user experiences.The Rubik's Cube project stems from my fascination with puzzles and desire to merge creativity with coding. This endeavor allowed me to apply React's powerful capabilities to create an engaging front-end experience. Assembling the cube challenges both logical thinking and artistic design. I hope this project not only showcases my skills but also serves as an enjoyable interactive tool for fellow puzzle enthusiasts. Together, let's explore the intriguing world of interactive web applications!
        </p> <p> Have a great day!</p>
      </div>
    </div>
  );
}

export default About;