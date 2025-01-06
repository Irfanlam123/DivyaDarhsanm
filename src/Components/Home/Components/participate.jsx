import React from "react";
import { RxAvatar } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import Participate2 from "../Components/Participate2";

const Participate = () => {
  return (
    <div>
      <div className=" w-full p-7  shadow-lg  bg-gray-100 flex items-center justify-center font-montserrat">
        <div className="  bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://divyadarshanm.in/wp-content/uploads/2024/11/Screenshot-2024-11-13-at-10.13.07%E2%80%AFAM.png"
              alt="Kaal Bhairav"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between md:w-1/2 py-10 ">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                To Remove 7 Past Lifetimes’ Sins and Negativity
              </h2>
              <p className="mt-4 text-[18px] text-gray-600 leading-relaxed">
                Kaal Bhairav Abhishek Puja, Sringar Sewa, Khappar Sewa, and Bhog
                Sewa
              </p>{" "}
              <div className="flex  py-4 text-[17px] ">
                <span className="py-1  text-red-600 hover:text-2xl">
                  {" "}
                  <IoLocationSharp />
                </span>

                <p className=" font-bold ">
                  Shri Kaal Bhairav Temple and Shri Adi Kaal Bhairav Temple
                </p>
              </div>
              <div className="flex ">
                <span className="py-1 gap-2 text-orange-600">
                  {" "}
                  <HiOutlineCalendarDateRange />
                </span>

                <p className="text-[17px] font-bold">Monday, 18 January 2025</p>
              </div>
              <div className="py-20 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white">
                    <span className="text-sm">
                      {" "}
                      <RxAvatar />
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white">
                    <span className="text-sm">
                      {" "}
                      <RxAvatar />
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white">
                    <span className="text-sm">
                      {" "}
                      <RxAvatar />
                    </span>
                  </div>
                </div>
                <p className="text-[17px] text-gray-600">
                  2000+ devotees have joined the Pujas organized by Divya
                  Darshanm 🙏🏻
                </p>
              </div>
            </div>

            <div className=" flex justify-center">
              <button className=" bg-blue-600 text-white py-3 px-6 text-lg rounded-md hover:bg-blue-300 hover:text-[#000] hover:font-semibold transition-all">
                Participate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-300  shadow-xl"></div>

      <div>
        <Participate2 />
      </div>
    </div>
  );
};

export default Participate;
