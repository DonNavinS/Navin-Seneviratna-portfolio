import React from "react";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
    <div className="flex justify-center items-center bg-red-300 gap-x-3.5 py-4">
      <a href="https://github.com/DonNavinS" target="_blank">
        <i className="fab fa-3x fa-github "></i>
      </a>
      <a
        href="https://www.linkedin.com/in/don-navin-seneviratna"
        target="_blank"
      >
        <i className="fab fa-3x fa-linkedin "></i>
      </a>
      <a href="https://twitter.com/navinwithani" target="_blank">
        <i className="fab fa-3x fa-twitter "></i>
      </a>
      <a href="https://www.instagram.com/navinwithani/" target="_blank">
        <i className="fab fa-3x fa-instagram "></i>
      </a>
    </div>
  );
}

export default Footer;
