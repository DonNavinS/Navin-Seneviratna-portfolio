import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center bg-red-700 gap-x-3.5 py-4">
      <a
        className="hover:text-white hover:scale-125 transition duration-200"
        href="https://github.com/DonNavinS"
        target="_blank"
      >
        <i className="fab fa-3x fa-github "></i>
      </a>
      <a
        className="hover:text-white hover:scale-125 transition duration-200"
        href="https://www.linkedin.com/in/don-navin-seneviratna"
        target="_blank"
      >
        <i className="fab fa-3x fa-linkedin "></i>
      </a>
      <a
        className="hover:text-white hover:scale-125 transition duration-200"
        href="https://twitter.com/navinwithani"
        target="_blank"
      >
        <i className="fab fa-3x fa-twitter "></i>
      </a>
      <a
        className="hover:text-white hover:scale-125 transition duration-200"
        href="https://www.instagram.com/navinwithani/"
        target="_blank"
      >
        <i className="fab fa-3x fa-instagram "></i>
      </a>
    </div>
  );
}

export default Footer;
