import React from "react";

function ProjectDisplay(props) {
  return (
    <div
      href={props.link}
      target="_blank"
      className={`flex flex-col items-center col-span-4 ${props.start} ${props.margin} h-full w-full transition duration 150 hover:scale-110 hover:opacity-60  `}
    >
      <img
        src={props.image}
        alt="Generated Webpage displaying employee cards"
        className="h-64"
      />
      <span>{props.title}</span>
      <span className="text-sm">{props.text}</span>
    </div>
  );
}

export default ProjectDisplay;
