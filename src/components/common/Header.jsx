import React, { useState } from "react";
import Btn from "../Btn";
import { scroll } from "./Scroll";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
const Logo = () => {
  return (
    <a href="/">
      <img className="w-40" src="./images/logo.png" alt="logo" />
    </a>
  );
};

const Header = ({ secsion2, secsion3, secsion4, form }) => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <div>
      <div className="md:flex hidden justify-between items-center py-2">
        <Logo />
        <div className="">
          <ul className="flex gap-5 font-[3px] items-center">
            <li className="group">
              <a
                className="group-hover:border-b border-black duration-300"
                href="/"
              >
                Products
              </a>
            </li>
            <li>
              <h2
                className="cursor-pointer"
                onClick={() => {
                  scroll(secsion2);
                }}
              >
                Startup tools
              </h2>
            </li>
            <li>
              <h2
                className="cursor-pointer"
                onClick={() => {
                  scroll(secsion3);
                }}
              >
                Featurs
              </h2>
            </li>
            <li>
              <h2
                className="cursor-pointer"
                onClick={() => {
                  scroll(secsion4);
                }}
              >
                Life support
              </h2>
            </li>
            <li>
              <h2
                className="cursor-pointer"
                onClick={() => {
                  scroll(form);
                }}
              >
                Our plans
              </h2>
            </li>
            <li>
              <a href="/">
                <Btn btn={"Login"} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --------------------Mobile Responsive---------------------- */}

      <div className="flex md:hidden justify-between items-center">
        <Logo /> <RxHamburgerMenu onClick={() => setMenu(!menu)} size={25} />
      </div>
      {menu && (
        <div className="md:hidden py-2 px-5 w-screen h-screen bg-white fixed top-0 left-0 z-50">
          <div className="flex justify-between items-center">
            <Logo /> <RxCross1 onClick={() => setMenu(!menu)} size={25} />
          </div>
          <div className="">
            <ul className="font-[3px] space-y-2">
              <li className="group">
                <a
                  className="group-hover:border-b border-black duration-300"
                  href="/"
                >
                  Products
                </a>
              </li>
              <li>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    scroll(secsion2);
                  }}
                >
                  Startup tools
                </h2>
              </li>
              <li>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    scroll(secsion3);
                  }}
                >
                  Featurs
                </h2>
              </li>
              <li>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    scroll(secsion4);
                  }}
                >
                  Life support
                </h2>
              </li>
              <li>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    scroll(form);
                  }}
                >
                  Our plans
                </h2>
              </li>
              <li>
                <a href="/">
                  <Btn btn={"Login"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
