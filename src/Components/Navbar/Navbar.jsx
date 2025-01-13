import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../src/assets/logo.jpeg";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Puja", path: "/Puja" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="bg-slate-900 p-1 font-montserrat shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="text-[#fdfbfa] font-extrabold text-xl">
            DivyaDarshanm
          </span>
        </div>

        <ul className="hidden md:flex space-x-8 justify-center flex-1">
          {navItems.map((item, index) => (
            <li key={index} className="text-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-100 hover:transition-all text-sm   hover:text-orange-200 font-semibold ${
                    isActive ? "font-bold text-[#fdfcfb]" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <button className="bg-slate-50   text-neutral-700  px-4 py-2 rounded-md shadow-md hover:bg-gray-400 hover:text-slate-50 transition duration-200">
            Login
          </button>
          <button className="bg-slate-50  px-4  py-2 border-2 rounded-md shadow-md hover:bg-slate-900 hover:font-semibold hover:text-white transition duration-200">
            Signup
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-gray-900" aria-label="Open Menu">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
