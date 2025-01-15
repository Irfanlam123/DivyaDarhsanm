import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import Logo from "../../../src/assets/logo.jpeg";
import KedarNath from "../../../src/assets/Footer/kedarNath.webp";
import KashiViswa from "../../../src/assets/Footer/KashiViswanath.webp";
import Rameswaram from "../../../src/assets/Footer/Rameswaram.webp";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-200 to-purple-300 text-white">
      {/* Top Section */}
      <div className="container p-4 sm:p-6">
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div>
            <img
              src={KedarNath}
              className="w-full h-[200px] sm:h-[250px] md:h-[270px] rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Temple Image 1"
            />
          </div>
          <div>
            <img
              src={KashiViswa}
              className="w-full h-[200px] sm:h-[250px] md:h-[270px] rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Temple Image 2"
            />
          </div>
          <div>
            <img
              src={Rameswaram}
              className="w-full h-[200px] sm:h-[250px] md:h-[270px] rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Temple Image 3"
            />
          </div>
        </div>
      </div>
      {/* Logo and Social Links */}
      <div className="container text-center mt-8">
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full shadow-lg border-4 border-white"
          />
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-6 mt-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook size={25} sm={30} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={25} sm={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={25} sm={30} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <FaYoutube size={25} sm={30} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={25} sm={30} />
          </a>
        </div>

        <div className="mt-6 text-slate-950">
          <p className="text-sm sm:text-lg font-medium">Registered Address:</p>
          <p className="text-sm sm:text-base">
            D 5/23 Tripura Bhairavi, Varanasi 221001
          </p>
        </div>
      </div>
      {/* Policy Links Section */}

      <div className="bg-gray-700 py-4 sm:py-6 mt-6">
        <div className="container flex flex-wrap justify-center space-x-4 sm:space-x-6 text-gray-400 text-xs sm:text-sm">
          <Link
            to="/cancellation"
            className="hover:text-white transition-colors duration-300"
          >
            Cancellation and Refund Policy
          </Link>
          <Link
            to="/PrivacyPolicy"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/Term&Condition"
            className="hover:text-white transition-colors duration-300"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4">
        <div className="text-center text-xs sm:text-sm text-gray-500">
          <p>© 2024 Shri Vidya Tech. All rights reserved.</p>
          <p>
            <a
              href="https://tw-elements.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              Visit our website
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
