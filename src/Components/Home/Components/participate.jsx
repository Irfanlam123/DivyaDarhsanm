import React, { useState, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { FaFacebookF, FaEnvelope, FaWhatsapp, FaTwitter } from "react-icons/fa";
import Participate2 from "../Components/Participate2";

const Participate = () => {
  const eventDate = new Date("2025-01-18T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-montserrat">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://divyadarshanm.in/wp-content/uploads/2024/11/Screenshot-2024-11-13-at-10.13.07%E2%80%AFAM.png"
              alt="Kaal Bhairav"
              className="w-full h-56 md:h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 md:p-6 flex flex-col justify-between md:w-1/2">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-gray-800">
                To Remove 7 Past Lifetimes’ Sins and Negativity
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                Kaal Bhairav Abhishek Puja, Sringar Sewa, Khappar Sewa, and Bhog
                Sewa
              </p>
              <div className="flex items-center mt-4 text-sm md:text-base text-gray-600">
                <IoLocationSharp className="text-red-500 mr-2" />
                <span className="font-medium">
                  Shri Kaal Bhairav Temple and Shri Adi Kaal Bhairav Temple
                </span>
              </div>
              <div className="flex items-center mt-2 text-sm md:text-base text-gray-600">
                <HiOutlineCalendarDateRange className="text-orange-500 mr-2" />
                <span className="font-medium">Monday, 18 January 2025</span>
              </div>
              <div className="mt-4 bg-blue-100 text-blue-900 p-3 rounded-md shadow-sm text-center">
                <p className="text-lg md:text-xl font-bold">
                  {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
                  {timeLeft.seconds}s
                </p>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white"
                  >
                    <RxAvatar className="text-sm text-gray-600" />
                  </div>
                ))}
              </div>
              <p className="ml-3 text-xs md:text-sm text-gray-500">
                2000+ devotees have joined the Pujas organized by Divya Darshanm
                🙏🏻
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-blue-600 text-white py-2 px-4 text-sm rounded-md hover:bg-blue-300 hover:text-black hover:font-bold transition-all">
                Participate
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-gray-50 p-4 flex justify-center items-center gap-4 mt-4 border-t">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 hover:bg-blue-800 transition-colors"
          >
            <FaFacebookF size={20} className="text-white" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-400 hover:bg-blue-600 transition-colors"
          >
            <FaTwitter size={20} className="text-white" />
          </a>
          <a
            href="mailto:info@example.com"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-red-500 hover:bg-red-700 transition-colors"
          >
            <FaEnvelope size={20} className="text-white" />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-700 transition-colors"
          >
            <FaWhatsapp size={20} className="text-white" />
          </a>
        </div>
      </div>

      {/* Other Components */}
      <div className="mt-6">
        <Participate2 />
      </div>
    </div>
  );
};

export default Participate;
