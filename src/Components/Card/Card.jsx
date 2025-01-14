import React from "react";
import { useNavigate } from "react-router-dom";
import Kaal from "../../../src/assets/Puja/Kaal.jpeg";

const Design = () => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/${id}`);
  };

  const cardData = [
    {
      id: 1,
      image: Kaal,
      heading: "Kaal Bhairav Temple, Kashi",
      des: "Kaal Bhairav ​​Ashtakam and Maha Aarti at Shree Kaal Bhairav Temple, Kashi.",
    },
    {
      id: 2,
      image: Kaal,
      heading: "Kaal Bhairav Temple, Kashi",
      des: "Kaal Bhairav ​​Ashtakam and Maha Aarti at Shree Kaal Bhairav Temple, Kashi.",
    },
    {
      id: 3,
      image: Kaal,
      heading: "Kaal Bhairav Temple, Kashi",
      des: "Kaal Bhairav ​​Ashtakam and Maha Aarti at Shree Kaal Bhairav Temple, Kashi.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          onClick={() => handleNavigation(card.id)}
          className="w-72 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 flex flex-col overflow-hidden cursor-pointer"
        >
          {/* Card Image */}
          <img
            src={card.image}
            alt={card.heading}
            className="h-40 w-full object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
          {/* Card Content */}
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-md font-semibold text-gray-800 text-center">
              {card.heading}
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-center leading-relaxed">
              {card.des}
            </p>
            {/* Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevents card click event
                handleNavigation(card.id);
              }}
              className="mt-4  bg-gradient-to-r from-blue-500 to-purple-500
                hover:from-yellow-500 hover:to-orange-400 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 self-center"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Design;
