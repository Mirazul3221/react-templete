import React from "react";
import Btn from "./Btn";

const Form = () => {
  return (
    <div className="py-10 flex gap-10 items-center">
      <div className="left w-1/2">
        <img src="./images/form.png" alt="" />
      </div>
      <div className="right w-1/2 bg-[#f1f1f1] p-10 pr-4 pl-20 rounded-l-[150px]">
        <h2 className="text-5xl font-bold mb-10 text-end">Get Into Touch</h2>
        <form className="w-full">
          <div className="flex gap-3">
            <div className="w-full space-y-4">
              <label className="font-medium" htmlFor="firstName">
                First Name
              </label>
              <br />
              <input
                id="firstName"
                className="w-full border focus:outline-none px-4 py-2 focus:border-black shadow-md rounded-full focus:bg-gray-100"
                type="text"
              />
            </div>
            <div className="w-full space-y-4">
              <label className="font-medium" htmlFor="lasttName">
                Last Name
              </label>{" "}
              <br />
              <input
                className="w-full border focus:outline-none px-4 py-2 focus:border-black shadow-md rounded-full focus:bg-gray-100"
                id="lastName"
                type="text"
              />
            </div>
          </div>
          <div className="w-full mt-4 space-y-4">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <br />
            <input
              className="w-full border focus:outline-none px-4 py-2 focus:border-black shadow-md rounded-full focus:bg-gray-100"
              id="email"
              type="email"
            />
          </div>
          <div className="w-full mt-4 space-y-4">
            <label className="font-medium" htmlFor="phone">
              Phone
            </label>
            <br />
            <input
              className="w-full border focus:outline-none px-4 py-2 focus:border-black shadow-md rounded-full focus:bg-gray-100"
              id="phone"
              type="number"
            />
          </div>

          <div className="flex justify-end">
            <textarea
              className="w-full h-20 mt-6 border focus:outline-none px-4 py-2 focus:border-black shadow-md rounded-md focus:bg-gray-100"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="mt-2 flex justify-end">
            <Btn btn="Submit" py="2" font="medium" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;