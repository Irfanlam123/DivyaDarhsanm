import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
    hover: { y: -5 }, // Move up a little bit when hovered
    rest: { y: 0 }, // Return to original position
  };

  return (
    <nav className="bg-red-50 p-3 font-montserrat shadow-2xl">
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

        {/* Desktop Menu (Centered) */}
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
          <button className="bg-slate-50 text-neutral-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-400 hover:text-slate-50 transition duration-200">
            Login
          </button>
          <button className="bg-slate-50 text-neutral-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-400 hover:text-slate-50 transition duration-200">
            Add Puja
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-900 bg-gray-200 px-2"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (Centered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-4 text-center">
          <ul className="space-y-2">
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
                      `block text-slate-700 text-sm hover:text-orange-400 font-semibold ${
                        isActive ? "font-bold text-red-600" : ""
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-2 px-4">
            <button className="w-full bg-slate-50 text-neutral-700 py-2 rounded-md shadow-md hover:bg-gray-400 hover:text-slate-50 transition duration-200">
              Login
            </button>
            <button className="w-full bg-slate-50 text-neutral-700 py-2 rounded-md shadow-md hover:bg-gray-400 hover:text-slate-50 transition duration-200">
              Add Puja
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
