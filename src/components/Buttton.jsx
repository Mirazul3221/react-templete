import React from "react";

const Buttton = ({
  btn = "Button",
  bg = "rose-500",
  color = "white",
  px = 6,
  py = 2,
}) => {
  return (
    <div
      className={`bg-${bg} px-${px} py-${py} text-${color} hover:bg-black rounded-md`}
    >
      {btn}
    </div>
  );
};

export default Buttton;
