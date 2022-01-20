import React from "react";

function ProjectDisplay(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className={`flex flex-col justify-center items-center col-start-${props.start} col-span-4 ${props.margin}  h-full w-full transition duration 150 hover:scale-110 hover:opacity-60 before: `}
    >
      <img
        src={props.image}
        alt="Generated Webpage displaying employee cards"
        className="h-64"
      />
      <span>{props.title}</span>
      <span className="text-sm">{props.text}</span>
    </a>
  );
}

export default ProjectDisplay;
