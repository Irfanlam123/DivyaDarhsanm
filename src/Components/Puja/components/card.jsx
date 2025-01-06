import React from "react";
import { MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function PujaCard({
  title,
  subtitle,
  description,
  imageUrl,
  location,
  date,
  participants,
}) {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 sm:max-w-md">
        <img
          className="w-full h-56 rounded-t-lg object-cover"
          src={imageUrl}
          alt={title}
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            {title}
          </h2>

          <p className="text-sm text-gray-600 text-center">{subtitle}</p>

          <p className="mt-4 text-gray-700 text-justify">{description}</p>
          <hr className="border-gray-300 my-4" />

          <div className="mt-4 flex items-center text-blue-700">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <p className="text-base font-medium">{location}</p>
          </div>
          <div className="mt-2 flex items-center text-gray-600">
            <CalendarDaysIcon className="h-5 w-5 mr-2" />
            <p className="text-sm">{date}</p>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            <strong>{participants}</strong>have booked.
          </p>

          <div className="text-center mt-6">
            <Link
              to="/participate"
              className="inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-yellow-400 hover:to-orange-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300 ease-in-out"
            >
              Participate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PujaCard;
