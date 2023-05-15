import React from "react";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";

export default function Features() {
  return (
    <section className="relative -mt-64">
      <img src={cloud1} className="absolute top-0 left-0 w-[60%]" />
      <img src={cloud2} className="absolute top-0 right-0 w-[60%]" />
      <div className="flex justify-center items-center  w-full paddingX pt-96">
        <h1>dasdsa</h1>
      </div>
    </section>
  );
}
