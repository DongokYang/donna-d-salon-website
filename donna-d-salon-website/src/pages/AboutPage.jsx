import AboutUs from "/src/assets/about/AboutUs.png";
import React, { useEffect, useState, useRef, forwardRef } from "react";
import StaffSection from "../components/About/StaffSection.jsx";

export default function About() {
  return (
    <div className="min-h-screen py-[7rem] bg-customBlack flex flex-col items-center justify-center">
      <h1 className="bg-white text-center bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
        About Us
      </h1>
      <div className="h-[70vh] grid place-content-center">
        <div>
          <div className="gap-10 flex flex-col items-center">
            <img
              src={AboutUs}
              alt="Background image"
              className="max-w-[40rem] mx-auto w-full h-auto"
            />
            <p className="text-lg text-white text-center max-w-2xl mx-auto">
              Donna D’ Stylist Salon is a welcoming space where creativity meets
              care. We believe every client deserves personalized attention and
              a style that reflects their unique beauty. Our mission is to
              create a relaxing experience while helping you leave feeling
              confident and refreshed.
            </p>
          </div>
        </div>
      </div>
      <StaffSection />
    </div>
  );
}
