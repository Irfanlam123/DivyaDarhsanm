import React from "react";
import Avtar from "../../../src/assets/Avtar.jpg";
import { Link } from "react-router-dom";

const Design = () => {
  return (
    <div className="flex justify-center space-x-4 ">
      <div className="h-[480px] w-96 rounded-md hover:shadow-2xl hover:bg-gray-100 flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
        <img
          src="https://divyadarshanm.in/wp-content/uploads/2024/12/Shri-Kaal-Bhairav-__Aapda-Haran-Yagya-Batuk-Bhairav-Stotra-Kaal-Bhairav-__Ashtakam-and-Maha-Aarti.jpg"
          alt="Kaal Bhairav Temple"
          className="h-50 w-full rounded-t-md object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="flex flex-col justify-between p-4 flex-1">
          <h3 className="text-lg font-bold text-gray-800 text-center transition-transform duration-300 ease-in-out hover:scale-105 ">
            📍Kaal Bhairav Temple, Kashi
          </h3>
          <p className="text-[17px] text-gray-600 mt-2 text-center leading-relaxed">
            Kaal Bhairav ​​Ashtakam and Maha Aarti at Shree Kaal Bhairav Temple,
            Kashi.
          </p>
          <div className="mt-4 flex justify-center">
            <Link
              to="/participate"
              className="bg-[#F56606] hover:bg-yellow-400 hover:text-black text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[480px] w-96 rounded-md hover:shadow-2xl hover:bg-gray-100 flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
        <img
          src="https://divyadarshanm.in/wp-content/uploads/2024/12/Shri-Kaal-Bhairav-__Aapda-Haran-Yagya-Batuk-Bhairav-Stotra-Kaal-Bhairav-__Ashtakam-and-Maha-Aarti.png"
          alt="Kaal Bhairav Temple"
          className="h-50 w-full rounded-t-md object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="flex flex-col justify-between p-4 flex-1">
          <h3 className="text-lg font-bold text-gray-800 text-center transition-transform duration-300 ease-in-out hover:scale-105">
            📍Mrityunjaya Mahadev Temple Kashi
          </h3>
          <p className="text-[17px] text-gray-600 mt-2 text-center leading-relaxed">
            Special Mahamrityunjaya Mantra Jaap Rudrabhishek Kartik Somvar,
            Kashi
          </p>
          <div className="mt-4 flex justify-center">
            <button className="bg-[#F56606] hover:bg-yellow-400 hover:text-black text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="h-[480px] w-96 rounded-md hover:shadow-2xl hover:bg-gray-100 flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
        <img
          src="https://divyadarshanm.in/wp-content/uploads/2024/12/Shri-Kaal-Bhairav-__Aapda-Haran-Yagya-Batuk-Bhairav-Stotra-Kaal-Bhairav-__Ashtakam-and-Maha-Aarti-2.png"
          alt="Kaal Bhairav Temple"
          className="h-50 w-full rounded-t-md object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="flex flex-col justify-between p-4 flex-1">
          <h3 className="text-lg font-bold text-gray-800 text-center transition-transform duration-300 ease-in-out hover:scale-105">
            📍 Ganga Ghat Kashi{" "}
          </h3>
          <p className="text-[17px] text-gray-600 mt-2 text-center leading-relaxed">
            Makar Sankranti Special Brahman Bhojan, Gau Seva and Deep Daan in
            Kashi
          </p>
          <div className="mt-4 flex justify-center">
            <button className="bg-[#F56606] hover:bg-yellow-400 hover:text-black text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
