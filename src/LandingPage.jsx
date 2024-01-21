import React, { useEffect, useRef, useState } from "react";
import Header from "./components/common/Header";
import TopSection from "./components/TopSection";
import Section1 from "./components/Section1";
import Section02 from "./components/Section02";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/common/Footer";
import Form from "./components/Form";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import About from "./components/common/About";
import ScrollProxyTriger from "./components/ScrollProxyTriger";

const LandingPage = () => {
  const [loder, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  const sec2 = useRef();
  const sec3 = useRef();
  const sec4 = useRef();
  const form = useRef();

  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <ScrollProxyTriger />
      <main className="App" data-scroll-container ref={ref}>
        {loder ? (
          <div className="flex justify-center items-center w-screen h-screen">
            <img src="./images/preloder.gif" alt="" />
          </div>
        ) : (
          <div className="">
            <div className="md:px-20 px-4">
              <Header
                secsion2={sec2}
                secsion3={sec3}
                secsion4={sec4}
                form={form}
              />

              <TopSection />
              <Section1 />
              {/* <About /> */}
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
          </div>
        )}
      </main>
    </LocomotiveScrollProvider>
  );
};

export default LandingPage;
