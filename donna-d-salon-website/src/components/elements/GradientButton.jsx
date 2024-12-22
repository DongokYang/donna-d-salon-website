import React from "react";
import { NavLink } from "react-router-dom";

const GradientButton = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "w-fit hover:scale-[85%] duration-300 scale-90 text-black bg-gradient-to-r from-customGoldStart to-customGoldEnd rounded-full font-bold py-2 px-4"
          : "w-fit hover:scale-[85%] duration-300 scale-90 bg-gradient-to-r from-customGoldStart to-customGoldEnd rounded-full font-bold py-2 px-4 text-black"
      }
    >
      <h4>{text}</h4>
    </NavLink>
  );
};

export default GradientButton;
