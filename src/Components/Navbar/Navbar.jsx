

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Puja", path: "/Puja" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  // Animation for text hover
  const hoverAnimation = {
    hover: { y: -5 },
    rest: { y: 0 },
  };

  return (
    <nav className="bg-slate-100 p-3 font-montserrat shadow-2xl">
      <div className="container mx-auto flex items-center justify-between py-0">
        {/* Logo */}
        <div className="flex items-center space-x-2 px-6">
          <img
            src="https://divyadarshanm.in/wp-content/uploads/2024/11/cropped-Divyadarshanm-1.png"
            alt="Logo"
            className="w-20 h-12"
          />
          <span className="text-red-600 font-extrabold text-lg">
            DivyaDarshanm
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index} className="text-center">
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={hoverAnimation}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-slate-700 text-sm hover:text-orange-400 font-semibold transition-all ${
                      isActive ? "font-bold text-red-600" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/signup"
            className="text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-yellow-500 hover:to-orange-400 text-white font-medium py-2 px-4 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Signup
          </Link>
          <Link
            to={"/pujaForm"}
            className="text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-yellow-500 hover:to-orange-400 text-white font-medium py-2 px-5 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <span>+</span> Puja
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-900 bg-gray-200 px-2"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Menu Items */}
        <div className="mt-16 space-y-4 text-center">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={hoverAnimation}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-slate-700 text-lg hover:text-orange-400 font-semibold ${
                        isActive ? "font-bold text-red-600" : ""
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-2 px-4">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-yellow-500 hover:to-orange-400 text-white font-medium py-2 px-3  rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SignUp
            </Link>

           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
