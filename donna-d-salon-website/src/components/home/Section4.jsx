import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import instagramAccount from "/public/image/home/instagram.png";

function Section4() {
  return (
    <div className="bg-black bg-opacity-75 grid pb-[6rem]">
      <div className="flex justify-between container mx-auto">
        <div className="flex flex-col justify-center">
          <h3 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
            Follow us
          </h3>
          <h2>Follow us on Instagram</h2>
          <p>Explore our clients' stunning style makeovers</p>
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white text-2xl mt-4"
          />
        </div>
        <img
          src={instagramAccount}
          alt="Instagram account image"
          className="max-w-[20rem] w-full h-auto mx-auto"
        />
      </div>
      <div className="absolute flex bottom-0 right-0 left-0 translate-y-20">
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className=" border border-customGoldStart -translate-x-3 max-w-[15rem] w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="border border-customGoldStart -translate-x-3 max-w-[15rem] w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="border border-customGoldStart -translate-x-3 max-w-[15rem] w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="border border-customGoldStart -translate-x-3 max-w-[15rem] w-full h-auto object-cover mx-auto"
        />
      </div>
    </div>
  );
}

export default Section4;
