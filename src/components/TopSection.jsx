import React from "react";
import video from "../videos/banner-video.mp4";
import Btn from "./Btn";

const TopSection = () => {
  return (
    <div className="banner">
      <div className="md:flex h-[100vh] justify-between items-center">
        <div className="left md:w-1/2 pr-8">
          <h2 className="md:text-5xl text-2xl font-bold">
            Create Minimal <br /> Templates for Notion
          </h2>
          <p className="mt-4 mb-2 text-2xl text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, corporis excepturi! Vitae veritatis enim similique.{" "}
          </p>
          <div className="mb-2">
            <Btn
              text={"lg"}
              btn={"Get Notionlink"}
              font={"medium"}
              py={"2"}
              px={"8"}
            />
          </div>
        </div>
        <div className="right md:block hidden">
          <video autoPlay loop muted src={video}></video>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
