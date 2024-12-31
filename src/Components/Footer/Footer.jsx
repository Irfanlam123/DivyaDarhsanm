import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social media icons

export default function Footer() {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
      <div className="container p-6">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full rounded-md shadow-lg"
              alt="City Image 1"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-full rounded-md shadow-lg"
              alt="City Image 2"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-full rounded-md shadow-lg"
              alt="City Image 3"
            />
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-blue-400 dark:text-neutral-200 dark:hover:text-blue-300"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-pink-500 dark:text-neutral-200 dark:hover:text-pink-400"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-blue-800 dark:text-neutral-200 dark:hover:text-blue-600"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Registered Address Section */}
        <div className="mt-6 text-neutral-700 dark:text-neutral-200">
          <p>Registered Address:</p>
          <p>D 5/23 Tripura Bhairavi, Varanasi 221001</p>
        </div>
      </div>

      {/* Copyright Section at the bottom */}
      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        <p>© Shri Vidya Tech</p>
        <p>
          <a
            className="dark:text-neutral-400"
            href="https://tw-elements.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            | All rights reserved 2024.
          </a>
        </p>
      </div>
    </footer>
  );
}
