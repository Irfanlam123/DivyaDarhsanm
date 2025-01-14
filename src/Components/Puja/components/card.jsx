import React, { useEffect, useState } from "react";
import { MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

function PujaCard({
  title,
  imageUrl,
  location,
  date,
  participants,
  targetDate,
}) {
  const [timeLeft, setTimeLeft] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const countdown = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  const handleCardClick = () => {
    navigate("/participate");
  };

  return (
    <div
      className="max-w-sm w-full h-[380px] bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col cursor-pointer md:max-w-xs sm:h-[350px]"
      onClick={handleCardClick}
    >
      <img
        className="w-full h-32 rounded-t-lg object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="flex flex-col flex-grow p-3">
        <h2 className="text-md font-semibold text-gray-800 text-center">
          {title}
        </h2>
        <div className="mt-2 flex items-center text-blue-700">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <p className="text-xs font-medium">{location}</p>
        </div>
        <div className="mt-1 flex items-center text-gray-600">
          <CalendarDaysIcon className="h-4 w-4 mr-2" />
          <p className="text-xs">{date}</p>
        </div>
        <div className="mt-3 text-center">
          {/* <p className="text-xs text-gray-700 font-medium">Event Starts In:</p> */}
          <p className="text-sm font-bold text-blue-600">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </p>
        </div>
        <div className="flex flex-col  ">
          <div className="border-b border-gray-300 my-3"></div>
          <div className="flex justify-between items-center">
            <p className="mt-2 text-xs text-gray-600">
              <strong>{participants}</strong> have booked.
            </p>

            <Link
              to="/participate"
              onClick={(e) => e.stopPropagation()}
              className="inline-block px-3 py-3 text-xs text-white 
              bg-gradient-to-r from-blue-500 to-purple-500
               rounded-md hover:from-yellow-400 hover:to-orange-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
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
