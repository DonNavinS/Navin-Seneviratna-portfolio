import React from "react";
import ResumeScreenshot from "../images/Resume.jpg";

function Resume() {
  return (
    <div
      id="resume"
      className="h-screen bg-opacity-80 flex flex-col items-center"
    >
      <h1 className="text-5xl">Resume</h1>
      <img
        src={ResumeScreenshot}
        alt="Navin Seneviratna Resume"
        className="resume m-2"
      />

      <a
        href="https://docs.google.com/document/d/1qQnKdy296shqyjlnhHByQQ1G_MXXVm8D7ErG6WhUGiY/edit?usp=sharing"
        target="_blank"
        className="font-semibold text-xl"
      >
        Click here for a better look!
      </a>
    </div>
  );
}

export default Resume;
