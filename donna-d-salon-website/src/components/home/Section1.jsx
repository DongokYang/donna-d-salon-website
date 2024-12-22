import React, { useEffect } from "react";
import bg_image from "/public/image/home/bg_image.jpg";
import main_image from "/public/image/home/main_image.png";
import GradientButton from "../elements/GradientButton";
import { gsap } from "gsap";

function Section1() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        ".animate-h3",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      )
      .fromTo(
        ".animate-h1",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      )
      .fromTo(
        ".animate-p",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
  }, []);

  return (
    <div className="relative bg-black bg-opacity-75 h-screen pt-[5rem] md:p-10 space-y-10 md:space-y-0">
      <img
        src={bg_image}
        alt="Background image"
        className="absolute -z-10 top-0 right-0 left-0"
      />

      <div className="container grid gap-10 mx-auto md:translate-y-[8rem] 2xl:translate-y-[10rem] place-items-center md:place-items-start">
        <div className="grid gap-4 lg:gap-5 text-center md:text-start">
          <h3 className="animate-h3">Welcome to</h3>
          <h1 className="animate-h1 text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
            Donna D'
            <br /> Stylist Salon
          </h1>
          <p className="hidden lg:block text-xl italic animate-p">
            With over 15 years of experience, you can trust us with your hair
          </p>
          <p className="lg:hidden text-ㅡㅇ md:text-xl italic animate-p">
            With over 15 years of experience,
            <br /> you can trust us with your hair
          </p>
        </div>
        <GradientButton to="/book-now" text="BOOK NOW" />
      </div>

      <img
        src={main_image}
        alt="Main image"
        className="md:max-w-[30rem] lg:max-w-[50rem] 2xl:max-w-[60rem] w-full h-auto md:absolute bottom-0 right-0"
      />
    </div>
  );
}

export default Section1;
