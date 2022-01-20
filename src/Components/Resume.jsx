import React from "react";
import ResumeScreenshot from "../images/Resume.jpg";

function Resume() {
  return (
    <div className="bg-yellow-300 h-screen bg-opacity-80 flex flex-col items-center">
      <img
        src={ResumeScreenshot}
        alt="Navin Seneviratna Resume"
        className="h-5/6 w-1/3 mt-10"
      />

      <a
        href="https://docs.google.com/document/d/1qQnKdy296shqyjlnhHByQQ1G_MXXVm8D7ErG6WhUGiY/edit?usp=sharing"
        target="_blank"
        className="text-base"
      >
        Click here for a better look!
      </a>
    </div>
  );
}

export default Resume;
