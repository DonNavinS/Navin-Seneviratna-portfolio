import React from "react";

function Header({ showNav }) {
  return (
    <nav
      className={`flex bg-red-700 h-screen items-center fixed right-0 ${
        showNav ? "slide-left" : "slide-nav-right"
      }`}
      style={{ width: "20%" }}
    >
      <div className="flex flex-col w-full" style={{ height: "70%" }}>
        <a
          className="hover:bg-red-500 transition duration-100 p-3"
          href="#about"
        >
          <span>About</span>
        </a>
        <a
          className="hover:bg-red-500 transition duration-100 p-3"
          href="#projects"
        >
          <span>Projects</span>
        </a>

        <a
          className="hover:bg-red-500 transition duration-100 p-3"
          href="#resume"
        >
          <span>Resume</span>
        </a>
        <a
          className="hover:bg-red-500 transition duration-100 p-3"
          href="#contact"
        >
          <span>Contact</span>
        </a>
      </div>
    </nav>
  );
}

export default Header;
