import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import instagramAccount from "/public/image/home/instagram.png";

function Section4() {
  return (
    <div className="bg-black bg-opacity-75 grid h-it md:h-[75vh] lg:h-[95vh] 2xl:h-screen">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 justify-center 2xl:gap-[15rem] container mx-auto">
        <div className=" px-5 flex flex-col items-start md:-translate-y-12 lg:-translate-y-24 pb-10">
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
          className="md:max-w-[15em] lg:max-w-[20rem] w-full h-auto pb-[5rem] md:pb-0 lg:pb-10 px-1 2xl:justify-self-start 2xl:ml-10"
        />
      </div>
      {/* <div className="grid h-[rem]">
      <div>{""}</div>
      </div> */}
      <div className="relative customScreen:h-[50vh] md:h-fit container mx-auto">
      <div className="absolute grid md:grid-cols-4 grid-cols-2 bottom-0 right-0 left-0 gap-5 px-5">
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="aspect-square border border-customGoldStart max-w-[20rem] w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="aspect-square border border-customGoldStart max-w-[20rem] w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="aspect-square border border-customGoldStart max-w-[20rem] w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="aspect-square border border-customGoldStart max-w-[20rem] w-full h-auto object-cover mx-auto"
        />
        {/* <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="aspect-square border border-customGoldStart max-w-[20rem] w-full h-auto object-cover mx-auto"
        /> */}
      </div>
      </div>
    </div>
  );
}

export default Section4;
