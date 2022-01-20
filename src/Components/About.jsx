import React from "react";
import NavinPhoto from "../images/Resume-Photo.jpg";

function About() {
  return (
    <div className="flex justify-center items-center gap-x-28 bg-blue-400 bg h-screen">
      <img src={NavinPhoto} alt="Navin Seneviratna" className="h-96" />
      <span>This is the description</span>
    </div>
  );
}

export default About;
