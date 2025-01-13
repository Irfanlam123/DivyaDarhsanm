import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import TrishulImage from "../../../src/assets/shiv.webp";
import TextCarousel from "../ImageCarousel/TextCarousel";
import { Link } from "react-router-dom";
import Design from "../Card/Card";
import Footer from "../Footer/Footer";
import { GiByzantinTemple } from "react-icons/gi";
import { FaHandsWash } from "react-icons/fa";
import FAQs from "../Home/Components/FAQs";
import FAQPage from "../Home/Components/FAQs";
import Icon from "../../../src/assets/Homepage/BookingComplete.webp";
import PoojaIcon from "../../../src/assets/Homepage/Pooja.webp";
import FamilyIcon from "../../../src/assets/Homepage/AddFamily.webp";
import ReviewCarousel from "../ImageCarousel/ReviewsText";
import Bless from "../../assets/Homepage/Bless.webp";

const Home = () => {
  return (
    <div className="font-montserrat">
      <div className="relative p-2 shadow-2xl">
        {/* <ImageCarousel /> */}
        {/* <img
          src="https://triptovaranasi.in/wp-content/uploads/2024/01/Ayodhya-Ram-Mandir-Darshan-Booking.webp"
          alt=""
          className="w-full"
        /> */}

        {/* <div className="">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-center space-x-14 p-6  w-full">
            <div className="text-[#F56606] text-4xl font-extrabold py-[98px]">
              <h1 className="text-slate-100">Your Way to</h1>
              <h2 className="text-5xl text-yellow-200 font-bold">
                Sanatana Dharma!
              </h2>
              <p className="mt-4 text-lg text-slate-950 font-bold">
                Daily darshans, Puja rituals, and Chadhava offerings, all in
                one.
              </p>
              <Link
                to="/Puja"
                className="inline-block bg-slate-950 text-slate-50 py-1 px-32 rounded-md text-[16px] font-montserrat hover:bg-slate-50 hover:text-slate-950 transition-all duration-300 transform hover:scale-105"
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
        </div> */}

        <div className="flex flex-col justify-center items-center ">
          {/* Div Sections */}
          <div className="flex w-full ">
            <div className="bg-red-200 h-[570px] w-[1700px]  items-center ">
              <div className="flex flex-col mt-56 justify-center">
                <h1 className="flex justify-center text-4xl font-bold   font-montserrat">
                  Your Way to
                </h1>
                <p className="flex justify-center  text-blue-950 text-4xl font-bold font-montserrat">
                  Sanatan Dharma!
                </p>
                <p className=" flex justify-center  mt-4 text-lg text-blue-600 font-bold">
                  Daily darshans, Puja rituals, and Chadhava offerings, all in
                  one.
                </p>
                <div className="flex justify-center py-6">
                  <Link
                    to="/Puja"
                    className="inline-block bg-slate-950 text-slate-50 py-2 font-semibold px-16 rounded-md text-[16px] font-montserrat hover:bg-yellow-300 hover:text-slate-950 transition-all duration-300 transform hover:scale-105"
                  >
                    Puja Now
                  </Link>
                </div>
                <p></p>
              </div>
              <div className="py-8 flex justify-center">icons.....</div>
            </div>

            <div className="bg-slate-50 h-[570px] w-full shadow-2xl flex justify-center items-center">
              <img
                src={TrishulImage}
                alt="Trishul"
                className="w-96 h-50 ml-6 rounded-xl shadow-slate-400  hover:shadow-2xl"
              />
            </div>
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
      <div className="w-full px-4  flex justify-center items-center">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg  text-center">
          <p className="text-[17px] font-semibold text-black leading-relaxed">
            Book Pujas in your and your family’s name at renowned temples in
            India. Receive divine blessings along with a special video of the
            sacred rituals and tirth prasad.
          </p>
        </div>
      </div>

      <div className="flex justify-center py-3 ">
        <a
          href="/Puja"
          className="font-bold text-xl text-[#F56606]  decoration-2 underline-offset-4 flex items-center  transition duration-300 hover:text-[#d45505] hover:underline-offset-4"
        >
          View all Puja
          <span className="text-2xl  items-center transition-transform duration-300 hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      <div className="py-4">
        <Design />
      </div>

      <div className="bg-pink-50">
        <div className="p-2  py-6 ">
          <h1 className="font-bold text-3xl font-montserrat text-orange-400 flex justify-center">
            Featured Sevas
          </h1>
          <div className="flex justify-center">
            <div>
              <p className="px-20  ">
                <img
                  src="https://divyadarshanm.in/wp-content/uploads/2024/11/1.svg"
                  alt=""
                />
              </p>
              <p className="font-bold font-montserrat text-2xl px-32">Pooja</p>
            </div>
            <div>
              <p className="px-20  ">
                <img
                  src="https://divyadarshanm.in/wp-content/uploads/2024/11/2.svg"
                  alt=""
                />
              </p>
              <p className="font-bold font-montserrat text-2xl px-24">
                Annadaan
              </p>
            </div>
            <div>
              <p className="px-20  ">
                <img
                  src="https://divyadarshanm.in/wp-content/uploads/2024/11/3.svg"
                  alt=""
                />
              </p>
              <p className="font-bold font-montserrat text-2xl px-32">
                Gauseva
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 py-6 ">
          <h1 className="font-bold text-3xl font-montserrat text-orange-400 flex justify-center">
            Know How wiil you Join The Pujas
          </h1>
          <div className="flex justify-center space-x-60 py-8">
            {" "}
            <p>
              <img
                src={PoojaIcon}
                alt="icon"
                className="h-60 w-full rounded-full mb-6 "
              />
            </p>
            <p className="text-2xl font-bold font-montserrat py-16 text-orange-400">
              01 Choose A Pooja
            </p>
          </div>
          <div className="flex justify-center space-x-60 py-8">
            {" "}
            <p className="text-2xl font-bold font-montserrat py-16 text-orange-400">
              02 Add Family Data
            </p>
            <p>
              <img
                src={FamilyIcon}
                alt="icon"
                className="h-60 w-full rounded-full mb-6 "
              />
            </p>
          </div>
          <div className="flex justify-center space-x-60 py-8">
            {" "}
            <p>
              <img
                src={Icon}
                alt="icon"
                className="h-60 w-full rounded-full mb-6 "
              />
            </p>
            <p className="text-2xl font-bold font-montserrat py-16 text-orange-400">
              03 Booking Complete
            </p>
          </div>
          <div className="flex justify-center space-x-60 py-8">
            {" "}
            <p className="text-2xl font-bold font-montserrat py-16 text-orange-400">
              04 Receive Blessing
            </p>
            <p>
              <img
                src={Bless}
                alt="icon"
                className="h-60 w-full rounded-full mb-6 "
              />
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <h1 className="font-bold text-3xl font-montserrat text-orange-400 flex justify-center py-6 ">
          Our Puja Kshetras Across Multiple States in India
        </h1>
        <div className="p-6 flex justify-center h-[650px] w-full">
          <img
            className=" "
            src="https://divyadarshanm.in/wp-content/uploads/2024/11/map.svg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-gray-300">
        <h1 className="font-bold text-3xl font-montserrat text-orange-400 flex justify-center py-6 ">
          Start Your Spritual Journey
        </h1>
        <div className="flex justify-center">
          <Link
            to="/Puja"
            className=" bg-orange-400 text-black py-2 px-6  rounded-sm text-[16px] font-montserrat hover:bg-green-400 transition-all duration-300 transform hover:scale-105 mb-10"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="bg-white">
        <h1 className="font-bold text-3xl font-montserrat text-orange-400 flex justify-center py-3 ">
          Devotees' Review
        </h1>
        <p className="font-bold text-xl font-montserrat text-gray-950 flex justify-center  ">
          Hear it from our blessed devotees
        </p>
        <div>
          <ReviewCarousel />
        </div>
      </div>

      <FAQPage />
      <Footer />
    </div>
  );
};

export default Home;
