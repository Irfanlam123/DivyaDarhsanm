import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import TrishulImage from "../../../src/assets/shiv.webp";
import TextCarousel from "../ImageCarousel/TextCarousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="relative p-2 shadow-2xl">
        <ImageCarousel />

        <div className="">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-center space-x-14 p-6  w-full">
            <div className="text-[#F56606] text-4xl font-extrabold py-[98px]">
              <h1 className="text-black">Your Way to</h1>
              <h2 className="text-5xl font-bold">Sanatana Dharma!</h2>
              <p className="mt-4 text-lg text-blue-400 font-bold">
                Daily darshans, Puja rituals, and Chadhava offerings, all in
                one.
              </p>
              <Link
                to="/Puja"
                className="inline-block bg-[#F56606] text-black py-1 px-6 rounded-full text-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
              >
                Puja Now
              </Link>
            </div>

            <img
              src={TrishulImage}
              alt="Trishul"
              className="w-96 h-50 ml-6 rounded-xl hover:shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="text-center py-6">
        <TextCarousel />
      </div>

      <div className="text-center py-3">
        <h1 className="text-2xl font-semibold text-[#F56606]">
          Upcoming Sevas
        </h1>
      </div>
    </div>
  );
};

export default Home;
