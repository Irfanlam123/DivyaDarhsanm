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
    <nav className="bg-yellow-200 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-[#F56606] font-bold text-xl">
            DivyaDarshanm
          </span>
        </div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-900 hover:underline ${isActive ? "font-bold" : ""}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button className="text-white" aria-label="Open Menu">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
