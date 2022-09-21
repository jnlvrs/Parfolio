import React from "react";
import "./Home.css"

var ReactRotatingText = require("react-rotating-text");

function Home() {
  return (
    <div id="Home" className="main-home-container bg2 borderb">
      <div className="title-container bg4 hl2 bxs">
        <h1>Juan Olivares</h1>
        <br />
        <div className="rt-container">
          <h2>
            
            <ReactRotatingText
              items={[
                "Full Stack Developer",
                "Husband",
                "Web Developer",
                "Father",
                "Software Engineer",
                "Friend",
                "Software Developer",
                "Analytical Thinker",
                "JavaScript Developer",
                "Critical Thinker",
                "Front End Developer",
                "Movie Enthusiast",
                "React Developer",
                "Coder",
                "Programmer",
              ]}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
