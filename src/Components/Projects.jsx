import React from "react";
import ProjectDisplay from "../utils/ProjectDisplay";

function Projects() {
  return (
    <div id="projects" className="py-20">
      <h1 className="text-5xl font-semibold text-red-700 underline text-center pb-4">
        Projects
      </h1>
      <div className="flex justify-center">
        <section className="flex flex-wrap justify-evenly gap-y-10">
          <ProjectDisplay
            title="Restaurant Rolodex"
            text="REST API, React, Express, mySQL"
            link="https://restaurant-rolodex.herokuapp.com/home"
            github="https://github.com/DonNavinS/Restaurant-Rolodex"
            image="RestRoloImage"
          />
          <ProjectDisplay
            title="IMDb Actor Game"
            text="IMDb API, React, Tailwind"
            link="https://donnavins.github.io/imdb-actor-game/"
            github="https://github.com/DonNavinS/imdb-actor-game"
            image="IMDbGameImage"
          />
          <ProjectDisplay
            title="Budget Tracker"
            text="React, MongoDB, Express, Tailwind"
            link="https://navin-budget-tracker.herokuapp.com/"
            github="https://github.com/DonNavinS/Budget"
            image="BudgetTracker"
          />
          <ProjectDisplay
            title="What's Happening"
            text="Javascript, Express, GoogleAPI"
            link="https://teamtoo222.github.io/Project-1-UofT/"
            github="https://github.com/Teamtoo222/Project-1-UofT"
            image="WhatsHappeningImage"
          />
          <ProjectDisplay
            title="Employee Profile Generator"
            text="JavaScript, HTML, Node CLI Application"
            link="https://github.com/DonNavinS/jest-challenge"
            github="https://github.com/DonNavinS/jest-challenge"
            image="JestImage"
          />
          <ProjectDisplay
            title="Team Profile Generator"
            text="Javascript, Node, Express, mySQL"
            link="https://floating-cove-91289.herokuapp.com/"
            github="https://github.com/groupsixzerotwo/smart-fix"
            image="SmartFix"
          />
          <ProjectDisplay
            title="Manager CLI Application"
            text="Javascript, Node, CLI Application"
            link="https://github.com/DonNavinS/mySQL-weekly-challenge"
            github="https://github.com/DonNavinS/mySQL-weekly-challenge"
            image="ManagerCLI"
          />
        </section>
      </div>
    </div>
  );
}

export default Projects;
