import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Logo */}
        <div>
          <img
            src="src\assets\global\salonlogo.png"
            alt="Salon Logo"
            className="h-12"
          />
        </div>
        {/* Right Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-gold font-medium hover:text-white transition-colors"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-gold font-medium hover:text-white transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            to="/services"
            className="text-gold font-medium hover:text-white transition-colors"
          >
            SERVICES
          </Link>
          <Link
            to="/gallery"
            className="text-gold font-medium hover:text-white transition-colors"
          >
            GALLERY
          </Link>
          <Link
            to="/book-now"
            className="bg-gold text-white font-bold py-2 px-4 rounded"
          >
            BOOK NOW
          </Link>
        </div>
      </nav>
    </header>
  );
}
