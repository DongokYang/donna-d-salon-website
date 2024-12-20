import React from "react";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Banner from "../components/home/Banner";

export default function Home() {
  return (
    <div>
      <Section1 />
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
