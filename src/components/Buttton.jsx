import React from "react";

const Buttton = ({
  btn = "Button",
  bg = "black",
  color = "white",
  px = 6,
  py = 2,
}) => {
  return (
    <div className={`bg-${bg} px-${px} py-${py} text-${color} rounded-md`}>
      {btn}
    </div>
  );
};

export default Buttton;
