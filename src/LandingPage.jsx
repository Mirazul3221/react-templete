import React, { useRef } from "react";
import Header from "./components/common/Header";
import TopSection from "./components/TopSection";
import Section1 from "./components/Section1";
import Section02 from "./components/Section02";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/common/Footer";
import Form from "./components/Form";

const LandingPage = () => {
  const sec2 = useRef();
  const sec3 = useRef();
  const sec4 = useRef();
  const form = useRef();
  return (
    <div className="px-20">
      <Header secsion2={sec2} secsion3={sec3} secsion4={sec4} form={form} />

      <TopSection />
      <Section1 />
      <div ref={sec2}>
        <Section02 />
      </div>
      <div className="" ref={sec3}>
        <Section3 />
      </div>
      <div ref={sec4}>
        <Section4 />
      </div>
      <div ref={form} className="form">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
