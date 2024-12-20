import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between gap-3 items-center">
        <div>
          <img
            src="src/assets/global/salonlogo.png"
            alt="Salon Logo"
            className="h-12"
          />
        </div>
        <div className="flex items-center space-x-10">
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
          <NavLink
            to="/book-now"
            className={({ isActive }) =>
              isActive
                ? "hover:scale-[85%] duration-300 scale-90 text-black bg-gradient-to-r from-customGoldStart to-customGoldEnd rounded-full font-bold py-2 px-4"
                : "hover:scale-[85%] duration-300 scale-90 bg-gradient-to-r from-customGoldStart to-customGoldEnd rounded-full font-bold py-2 px-4 text-black"
            }
          >
            <h4>BOOK NOW</h4>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
