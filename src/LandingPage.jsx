import React, { useRef } from "react";
import Header from "./components/common/Header";
import TopSection from "./components/TopSection";
import Section1 from "./components/Section1";
import Section02 from "./components/Section02";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/common/Footer";
import Buttton from "./components/Buttton";

const LandingPage = () => {
  const sec2 = useRef();
  const sec3 = useRef();
  return (
    <div className="px-20">
      <Header secsion2={sec2} secsion3={sec3} />

      <TopSection />
      <Section1 />
      <div ref={sec2}>
        <Section02 />
      </div>
      <div className="" ref={sec3}>
        <Section3 />
      </div>
      <Section4 />
      <Footer />
      <div className="flex gap-4">
        <Buttton btn={"Click Here"} />
        <Buttton bg={"[#ff00dd]"} color={"white"} btn={"Read More"} />
        <Buttton bg={"amber-700"} color={"[#00ff44]"} btn={"More Info..."} />
        <Buttton btn={"More Info..."} />
      </div>
    </div>
  );
};

export default LandingPage;
