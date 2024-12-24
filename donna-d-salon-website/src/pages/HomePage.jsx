import React from "react";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Banner from "../components/home/Banner";
import bg_image from "/public/image/home/bg_image.jpg";

export default function Home() {
  return (
    <div className="relative">
      <img
        src={bg_image}
        alt="Background image"
        className="absolute -z-10 top-0 right-0 left-0 h-full w-full object-cover"
      />
    <div>
      <Section1 />
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
    </div>

  );
}
