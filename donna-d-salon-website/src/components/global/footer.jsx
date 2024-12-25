import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "/public/image/global/salonlogoWtext.png";

export default function Footer() {
  return (
    <footer className="bg-customBlack text-white py-10">
      {/* Wrapper */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-8 space-y-10 md:space-y-0">
        {/* Info Section */}
        <div className="flex flex-col md:flex-row w-full gap-10">
          {/* Logo Section */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src={logo}
              alt="Logo"
              className="max-w-[16rem] w-full h-auto object-contain"
            />
          </div>

          {/* Salon Hours */}
          <div className="h-fit flex-1 flex flex-col items-center md:items-start md:border-l md:border-customGoldEnd md:pl-6 space-y-2 text-center md:text-left">
            <h4 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
              SALON HOURS
            </h4>
            <p>Tue–Sat: 9:00am–6:00pm</p>
          </div>

          {/* Address */}
          <div className="h-fit flex-1 flex flex-col items-center md:items-start md:border-l md:border-customGoldEnd md:pl-6 space-y-2 text-center md:text-left">
            <h4 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
              ADDRESS
            </h4>
            <p>1551 Arlington Street</p>
          </div>

          {/* Contact */}
          <div className="flex-1 flex flex-col items-center md:items-start md:border-l md:border-customGoldEnd md:pl-6 space-y-2 text-center md:text-left">
            <h4 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
              CONTACT
            </h4>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              <span className="ml-3">{""}</span>(204) 599 3161 | (204) 813 1991
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-3">{""}</span>donnadstylist1551@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faInstagram} />
              <span className="ml-3">{""}</span>@donnadstylistsalon
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10">
        <p className="text-sm text-gray-300 text-center">
          Copyright © 2024 Donna D Stylist Salon All rights reserved
        </p>
      </div>
    </footer>
  );
}
