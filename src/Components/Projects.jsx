import React from "react";
import ProjectDisplay from "../utils/ProjectDisplay";

function Projects() {
  return (
    <div className="bg-gradient-to-b from-red-300 to-cyan-300 py-8">
      <h1 className="text-5xl text-center pb-4">Projects</h1>

      <div className="grid grid-cols-12 gap-y-16 ">
        <ProjectDisplay
          title="Restaurant Rolodex"
          text="REST API, React, Express, mySQL"
          link="https://restaurant-rolodex.herokuapp.com/home"
          github="https://github.com/DonNavinS/Restaurant-Rolodex"
          image="RestRoloImage"
          margin="translate-x-24"
          start="col-start-2"
        />
        <ProjectDisplay
          title="IMDb Actor Game"
          text="IMDb API, React, Tailwind"
          link="https://donnavins.github.io/imdb-actor-game/"
          github="https://github.com/DonNavinS/imdb-actor-game"
          image="IMDbGameImage"
          margin="-translate-x-10"
          start="col-start-8"
        />
        <ProjectDisplay
          title="What's Happening"
          text="Javascript, Express, GoogleAPI"
          link="https://teamtoo222.github.io/Project-1-UofT/"
          github="https://github.com/Teamtoo222/Project-1-UofT"
          image="WhatsHappeningImage"
          margin="translate-x-24"
          start="col-start-2"
        />

        <ProjectDisplay
          title="Employee Profile Generator"
          text="JavaScript, HTML, Node CLI Application"
          link="https://github.com/DonNavinS/jest-challenge"
          github="https://github.com/DonNavinS/jest-challenge"
          image="JestImage"
          margin="-translate-x-10"
          start="col-start-8"
        />
        <ProjectDisplay
          title="Team Profile Generator"
          text="Javascript, Node, Express, mySQL"
          link="https://floating-cove-91289.herokuapp.com/"
          github="https://github.com/groupsixzerotwo/smart-fix"
          image="SmartFix"
          margin="translate-x-24"
          start="col-start-2"
        />
        <ProjectDisplay
          title="Manager CLI Application"
          text="Javascript, Node, CLI Application"
          link="https://github.com/DonNavinS/mySQL-weekly-challenge"
          github="https://github.com/DonNavinS/mySQL-weekly-challenge"
          image="ManagerCLI"
          margin="-translate-x-10"
          start="col-start-8"
        />
      </div>
    </div>
  );
}

export default Projects;
