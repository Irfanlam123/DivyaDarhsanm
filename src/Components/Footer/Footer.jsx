import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Lord1 from "../../../src/assets/Footer/Footer1.jpg";
import Lord2 from "../../../src/assets/Footer/Footer2.jpg";
import Lord3 from "../../../src/assets/Footer/Footer3.jpg";
import Logo from "../../../src/assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-gray-900 text-white">
      <div className="container p-6">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div>
            <img
              src={Lord1}
              className="w-full h-[270px] rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Temple Image 1"
            />
          </div>
          <div>
            <img
              src={Lord2}
              className="w-full h-[270px] rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Temple Image 2"
            />
          </div>
          <div>
            <img
              src={Lord3}
              className="w-full h-[270px] rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Temple Image 3"
            />
          </div>
        </div>
      </div>

      <div className="container text-center mt-8">
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-28 h-28 rounded-full shadow-lg border-4 border-white"
          />
        </div>

        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        <div className="mt-6 text-gray-400">
          <p className="text-lg font-medium">Registered Address:</p>
          <p>D 5/23 Tripura Bhairavi, Varanasi 221001</p>
        </div>
      </div>

      <div className="bg-gray-700 py-4 mt-8">
        <div className="text-center text-sm text-gray-400">
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
