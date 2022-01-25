import React from "react";

function ProjectDisplay(props) {
  return (
    <div
      className={`bg-${props.image} border-black border-2 rounded ${props.start} ${props.margin} w-96 h-60 hover:scale-110 transition duration-300  `}
    >
      <a href={props.link} target="_blank">
        <div className="flex flex-col justify-center items-center gap-y-2 h-full w-full opacity-0 hover:opacity-70 bg-black">
          <div className="flex justify-center gap-x-4">
            <a href="https://google.ca" target="_blank">
              <i className="fab fa-github fa-2x "></i>
            </a>
            <a href={props.link} target="_blank">
              <i className="fas fa-desktop fa-2x"></i>
            </a>
          </div>
          <span className="text-white">{props.title}</span>
          <span className="text-white text-sm">{props.text}</span>
        </div>
      </a>
    </div>
  );
}

export default ProjectDisplay;
