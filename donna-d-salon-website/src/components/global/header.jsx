import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/public/image/global/logo.png";
import GradientButton from "../elements/GradientButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="text-white p-4 fixed top-0 right-0 left-0 z-[100] bg-black">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="max-w-[3rem] w w-full h-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "hover:scale-95 duration-300 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent"
                : "hover:scale-95 duration-300"
            }
          >
            <h4>HOME</h4>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "hover:scale-95 duration-300 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent"
                : "hover:scale-95 duration-300"
            }
          >
            <h4>ABOUT US</h4>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "hover:scale-95 duration-300 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent"
                : "hover:scale-95 duration-300"
            }
          >
            <h4>SERVICES</h4>
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "hover:scale-95 duration-300 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent"
                : "hover:scale-95 duration-300"
            }
          >
            <h4>GALLERY</h4>
          </NavLink>
          <GradientButton to="/book-now" text="BOOK NOW" />
        </div>

        {/* Mobile Burger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none z-[200] relative"
          >
            <div
              className={`w-6 h-0.5 bg-white mb-2 transition-transform ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            ></div>
            {/* <div
              className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div> */}
            <div
              className={`w-6 h-0.5 bg-white transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-black text-white flex flex-col gap-6 p-8 pt-20 transform transition-transform duration-300 z-[150] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className="hover:scale-95 duration-300 text-xl pl-3"
        >
          <h4>HOME</h4>
        </NavLink>
        <NavLink
          to="/about"
          onClick={closeMenu}
          className="hover:scale-95 duration-300 text-xl pl-3"
        >
          <h4>ABOUT US</h4>
        </NavLink>
        <NavLink
          to="/services"
          onClick={closeMenu}
          className="hover:scale-95 duration-300 text-xl pl-3"
        >
          <h4>SERVICES</h4>
        </NavLink>
        <NavLink
          to="/gallery"
          onClick={closeMenu}
          className="hover:scale-95 duration-300 text-xl pl-3"
        >
          <h4>GALLERY</h4>
        </NavLink>
        <GradientButton to="/book-now" text="BOOK NOW" />
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-[100]"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}
