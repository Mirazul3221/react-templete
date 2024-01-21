import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useLayoutEffect(() => {
    const ele = ref.current;
    gsap.to(ele, {
      scrollTrigger: {
        trigger: ele,
        start: "top 50%",
        end: "top 10%",
        scrub: true,
        // markers: true,
        onUpdate() {
          console.log("Update");
        },
      },
      x: 400,
      animation: 1,
    });
  }, []);
  return (
    <section className="h-[100vh] w-[100%] relative bg-amber-100 flex justify-between">
      <div className="left w-[35%]">
        <div ref={ref} className="w-20 h-20 bg-amber-300" data-scroll></div>
        <h2>Hello Everyone How are You</h2>
        <p data-scroll>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, odit
          praesentium. Eos quisquam, obcaecati asperiores voluptatem ullam
          expedita, voluptates inventore ipsum assumenda distinctio quis
          eligendi quaerat saepe illum amet! Exercitationem.
        </p>
      </div>
      <div className="right flex items-center overflow-hidden w-[50%] gap-4 bg-amber-500 absolute left-[35%] pl-[20%] min-h-[100vh]">
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
        <h2>Image</h2>
      </div>
    </section>
  );
};

export default About;
