import React from "react";

function Button(props) {
  return (
    <div className=" border-2 p-2 rounded text-white hover:bg-white hover:text-red-400 hover:scale-110 transition duration-200 ease-in-out">
      {props.text}
    </div>
  );
}

export default Button;
