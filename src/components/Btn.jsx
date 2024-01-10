import React from "react";

const Btn = ({
  btn = "btn",
  px = 6,
  py = "[2px]",
  bg = "black",
  color = "white",
  text = "md",
  font = "thin",
}) => {
  return (
    <div
      className={`px-${px} cursor-pointer py-${py} bg-${bg} text-${color} duration-500 hover:bg-gray-900 text-${text} font-${font} rounded-md w-fit`}
    >
      {btn}
    </div>
  );
};

export default Btn;
