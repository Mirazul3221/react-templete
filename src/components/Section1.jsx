import React from "react";
import Btn from "./Btn";

const Section1 = () => {
  return (
    <div className="md:py-10 bg-[#f1f1f1] md:flex justify-between items-center md:text-justify text-lg px-10">
      <div
        className="left md:w-1/2"
        data-scroll
        data-scroll-speed="9"
        data-scroll-direction="horizontal"
      >
        <img className="md:w-[80%]" src="/images/health.png" alt="" />
      </div>
      <div className="right md:w-1/2" data-scroll data-scroll-speed="5">
        <h2 className="md:text-3xl text-lg mt-2 font-bold mb-3">
          Create great performing templates
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          excepturi dolorum non eum. Nostrum veritatis numquam dolorum doloribus
          est illum odio obcaecati voluptatem nemo id praesentium recusandae,
          non reiciendis maxime. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Similique excepturi dolorum non eum. Nostrum
          veritatis numquam dolorum doloribus est illum odio obcaecati
          voluptatem nemo id praesentium recusandae,{" "}
        </p>
        <div className="py-2 pb-6">
          <a href="/">
            <Btn btn={"Read More..."} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
