import React from "react";
import NavinPhoto from "../images/Resume-Photo.jpg";
import {
  cssLogo,
  graphQlLogo,
  htmlLogo,
  javaScriptLogo,
  mongoDbLogo,
  mySqlLogo,
  nodeLogo,
  reactLogo,
} from "../utils/icons";

function About({ showNav }) {
  let width = showNav && "80%";

  return (
    <div id="about" className="h-screen flex" style={{ width: width }}>
      <div
        style={{ width: "40%" }}
        className=" flex justify-center items-center"
      >
        <img
          style={{ width: "60%" }}
          className="rounded"
          src={NavinPhoto}
          alt="Navin Seneviratna"
        />
      </div>
      <div
        className=" flex flex-col items-center justify-center gap-y-5"
        style={{ width: "60%" }}
      >
        <h1 className="text-7xl text-red-700 font-bold text-center">
          Navin Seneviratna
        </h1>
        <h2>SeneviratnaNavin@gmail.com | (647)-975-9397</h2>
        <span
          style={{ width: "80%" }}
          className="text-lg about-me-description text-center"
        >
          Full-Stack developer with a passion for learning and developing my
          skills. Graduated from University of Toronto's SCS Coding Bootcamp,
          where I familiarized myself with HTML, CSS, JavaScript, and various
          front-end and back-end technologies
        </span>
        <div className="flex gap-x-3">
          <div>{htmlLogo}</div>
          <div>{cssLogo}</div>
          <div>{javaScriptLogo}</div>
          <div>{nodeLogo}</div>
          <div>{mySqlLogo}</div>
          <div>{mongoDbLogo}</div>
          <div>{graphQlLogo}</div>
          <div>{reactLogo}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
