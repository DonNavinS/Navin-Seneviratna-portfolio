import React from "react";
import ProjectDisplay from "../utils/ProjectDisplay";

import RestRoloImage from "../images/Rest-Rolo.jpg";
import WhatsHappeningImage from "../images/Whats-Happening-logo.jpg";
import SmartFixImage from "../images/SmartFix.jpg";
import JestImage from "../images/Jest-challenge.jpg";

function Projects() {
  return (
    <div className="grid grid-cols-12 gap-y-16 bg-teal-200 py-20">
      <ProjectDisplay
        title="Restaurant Rolodex"
        text="React, Express, mySQL"
        link="https://restaurant-rolodex.herokuapp.com/home"
        image={RestRoloImage}
        margin="translate-x-10"
        start="col-start-2"
      />
      <ProjectDisplay
        title="What's Happening"
        text="Javascript, Express, GoogleAPI"
        link="https://teamtoo222.github.io/Project-1-UofT/"
        image={WhatsHappeningImage}
        margin="-translate-x-10"
        start="col-start-8"
      />
      <ProjectDisplay
        title="SmartFix"
        text="Node, Express, mySQL"
        link="https://floating-cove-91289.herokuapp.com/"
        image={SmartFixImage}
        margin="translate-x-10"
        start="col-start-2"
      />
      <ProjectDisplay
        title="Employee Profile Generator"
        text="Node, CLI Application"
        image={JestImage}
        margin="-translate-x-10"
        start="col-start-8"
      />
    </div>
  );
}

export default Projects;
