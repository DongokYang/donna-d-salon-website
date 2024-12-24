import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import instagramAccount from "/public/image/home/instagram.png";

function Section4() {
  return (
    <div className="bg-black bg-opacity-75 grid py-10">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 container mx-auto">
        <div className="px-5 flex flex-col justify-center items-center md:items-start">
          <h3 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
            Follow us
          </h3>
          <h2>Follow us on Instagram</h2>
          <p>Explore our clients' stunning style makeovers</p>
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white text-2xl my-4"
          />
        </div>
        <img
          src={instagramAccount}
          alt="Instagram account image"
          className=" px-10 translate-y-5 md:max-w-full md:px-10 lg:max-w-[40rem] md:max-h-[30rem] object-contain w-full h-auto self-end mt-5"
        />
      </div>
      {/* <div className="grid h-[rem]">
      <div>{""}</div>
      </div> */}
      <div className="relative container mx-auto">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 px-3">
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="aspect-square border border-customGoldStart w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="aspect-square border border-customGoldStart w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="aspect-square border border-customGoldStart w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="aspect-square border border-customGoldStart w-full h-auto object-cover mx-auto"
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
