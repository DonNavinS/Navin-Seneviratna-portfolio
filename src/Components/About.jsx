import React from "react";
import NavinPhoto from "../images/Resume-Photo.jpg";

function About() {
  return (
    <div className="bg-gradient-to-tr from-red-400 to-cyan-300 bg h-screen py-8">
      <h1 className="text-5xl text-center pb-4">About Me</h1>
      <div className="flex justify-center items-center gap-x-28 ">
        <img src={NavinPhoto} alt="Navin Seneviratna" className="h-96" />
        <span className="text-lg about-me-description text-center">
          Graduated from the University of Toronto with a Bachelor's degree in
          biotechnology, but quickly realized a life surrounded by beakers,
          petri dishes and fruit flies was not for me. So I decided to take
          those analytical problem-solving skills and apply them to coding, and
          so far I could not be happier with my decision! My goals are to learn
          the ins and outs of web development, become a full-stack developer,
          and further expand my knowledge of coding and the possibilities it can
          bring.
        </span>
      </div>
    </div>
  );
}

export default About;
