
import { useEffect, useState } from "react";
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
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const countdown = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(countdown);
  }, [targetDate]);

  const handleCardClick = () => navigate("/participate");

  return (
    <div
      className="w-full max-w-sm sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative w-full h-40 sm:h-48 md:h-52">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={imageUrl}
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-4">
        {/* Title */}
        <h2 className="text-md md:text-lg font-semibold text-gray-800 text-center">
          {title}
        </h2>

        {/* Location */}
        <div className="mt-2 flex items-center text-blue-700 text-sm md:text-base">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <p>{location}</p>
        </div>

        {/* Date */}
        <div className="mt-1 flex items-center text-gray-600 text-sm md:text-base">
          <CalendarDaysIcon className="h-4 w-4 mr-2" />
          <p>{date}</p>
        </div>

        {/* Countdown Timer */}
        <div className="mt-3 text-center">
          <p className="text-base md:text-lg font-bold text-blue-600">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </p>
        </div>

        {/* Participants & Button */}
        <div className="flex flex-col mt-4">
          <div className="border-b border-gray-300 my-3"></div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <p className="text-sm md:text-base text-gray-600">
              <strong>{participants}</strong> have booked.
            </p>

            <Link
              to="/participate"
              onClick={(e) => e.stopPropagation()}
              className="mt-2 sm:mt-0 px-4 py-2 text-sm md:text-base text-white 
                bg-gradient-to-r from-blue-500 to-purple-500 rounded-md 
                hover:from-yellow-400 hover:to-orange-500 focus:ring-2 
                focus:ring-blue-300 focus:outline-none transition-all duration-300"
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
