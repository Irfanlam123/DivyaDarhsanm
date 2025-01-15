import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../src/assets/logo.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Puja", path: "/Puja" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-purple-200 p-3 font-montserrat shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="text-slate-950 font-extrabold text-xl">
            DivyaDarshanm
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 justify-center flex-1">
          {navItems.map((item, index) => (
            <li key={index} className="text-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-slate-700 hover:transition-all text-sm hover:text-orange-400 font-semibold ${
                    isActive ? "font-bold text-[#fdfcfb]" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-slate-50 text-neutral-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-400 hover:text-slate-50 transition duration-200">
            Login
          </button>
          <button className="bg-slate-50 px-4 py-2 border-2 rounded-md shadow-md hover:bg-slate-900 hover:font-semibold hover:text-white transition duration-200">
            Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-900"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index} className="text-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-slate-700 text-sm hover:text-orange-400 font-semibold ${
                      isActive ? "font-bold text-[#fdfcfb]" : ""
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="space-y-2 text-center">
            <button className="block w-full bg-slate-50 text-neutral-700 py-2 rounded-md shadow-md hover:bg-gray-400 hover:text-slate-50 transition duration-200">
              Login
            </button>
            <button className="block w-full bg-slate-50 py-2 border-2 rounded-md shadow-md hover:bg-slate-900 hover:font-semibold hover:text-white transition duration-200">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
