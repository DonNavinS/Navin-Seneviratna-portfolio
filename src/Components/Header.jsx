import React from "react";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="">
      <div className="flex justify-center gap-x-8 py-8 bg-red-400">
        <Link to="/about">
          <Button text="About Me" />
        </Link>
        <Link to="/projects">
          <Button text="Projects" />
        </Link>
        <Link to="/resume">
          <Button text="Resume" />
        </Link>
        <Link to="/contact">
          <Button text="Contact" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
