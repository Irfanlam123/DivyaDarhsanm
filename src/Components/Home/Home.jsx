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
  const pujaProcess = [
    {
      id: 1,
      title: "Puja Process",
      image:
        "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=x9vjcbG92K37JF5qTWD8ZEV7M2gFnYbPKgsFjFhzuMQ=",
    },
    {
      id: 1,
      title: "Puja Process",
      image:
        "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=x9vjcbG92K37JF5qTWD8ZEV7M2gFnYbPKgsFjFhzuMQ=",
    },
    {
      id: 1,
      title: "Puja Process",
      image:
        "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=x9vjcbG92K37JF5qTWD8ZEV7M2gFnYbPKgsFjFhzuMQ=",
    },
    {
      id: 1,
      title: "Puja Process",
      image:
        "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=x9vjcbG92K37JF5qTWD8ZEV7M2gFnYbPKgsFjFhzuMQ=",
    },
  ];
  const cardData = [
    {
      id: 1,
      name: "Something1",
      image:
        "https://images.pexels.com/photos/18287935/pexels-photo-18287935/free-photo-of-view-of-arulmigu-ramanathaswamy-temple-in-rameshwaram.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "35/minutes",
    },
    {
      id: 2,
      name: "Something2",
      image:
        "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=x9vjcbG92K37JF5qTWD8ZEV7M2gFnYbPKgsFjFhzuMQ=",
      price: "35/m",
    },
    {
      id: 3,
      name: "Something3",
      image:
        "https://images.pexels.com/photos/18892582/pexels-photo-18892582/free-photo-of-japan-wallpapers.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "35/m",
    },
    {
      id: 4,
      name: "Something4",
      image:
        "https://images.pexels.com/photos/27941934/pexels-photo-27941934/free-photo-of-ancient-city-bangkok.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "35/m",
    },
  ];
  return (
    <div className="font-montserrat">
      <div className="relative p-2 shadow-2xl">
        <div className="flex flex-col justify-center items-center ">
          {/* Div Sections */}
          <div className="flex w-full ">
            <div className="bg-gradient-to-r from-blue-200 to-blue-300 h-[570px] w-[1700px]  items-center ">
              {/* <ImageCarousel /> */}
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
              </div>
              <div className="py-8 flex justify-center">
                {pujaProcess.map((puja) => (
                  <div key={puja.id}>
                    <h3 className=" text-sm  px-4 text-gray-700">
                      Puja..........
                    </h3>
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 mb-4 space-y-2 hover:scale-110 transition-transform duration-300">
                      <img
                        src={puja.image}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-200 to-blue-200 h-[570px] w-full shadow-2xl flex justify-center items-center">
              <img
                src={TrishulImage}
                alt="Trishul"
                className="w-96 h-50 ml-6 rounded-xl shadow-slate-400  hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-sm p-3 bg-gray-50 h-[460px] w-full flex space-x-3">
        {/* Cards Section */}
        <div className="bg-gradient-to-r from-slate-400 to-slate-700 flex flex-wrap items-center justify-center p-4 gap-4 flex-[2]  ">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-pink-100 to-blue-100 flex flex-col w-[calc(50%-1rem)] h-48 rounded-lg shadow-lg p-4 items-center hover:scale-110 transition-transform duration-400"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 mb-4">
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-bold">{card.name}</h2>
              {/* <p className="text-sm text-gray-500">Price: {card.price}</p> */}
            </div>
          ))}
        </div>

        {/* Right Side Section */}
        <div className="bg-gradient-to-r from-blue-200 to-blue-300 flex-1 flex items-center justify-center p-3">
          <ImageCarousel />
        </div>
      </div>

      <div className="text-center py-6">
        <TextCarousel />
      </div>

      <div className="flex justify-center py-3 ">
        <a
          href="/Puja"
          className="font-bold text-xl text-slate-800 font-montserrat  decoration-2 underline-offset-4 flex items-center  transition duration-300 hover:text-[#d45505] hover:underline-offset-4"
        >
          View all Pujas
          <span className="text-2xl  items-center transition-transform duration-300 hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      <div className="py-4 bg-gradient-to-r from-blue-50 to-blue-100 ">
        <Design />
      </div>

      <div
        className=" bg-gradient-to-r from-blue-100 to-purple-200
               "
      >
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
      <div
        className=" bg-gradient-to-r from-blue-100 to-purple-200
               "
      >
        <h1 className="font-bold text-3xl font-montserrat text-orange-400 flex justify-center py-6 ">
          Start Your Spritual Journey
        </h1>
        <div className="flex justify-center">
          <Link
            to="/Puja"
            className="  bg-gradient-to-r from-blue-500 to-purple-500
                hover:from-yellow-400 hover:to-orange-500 text-black py-2 px-6  rounded-sm text-[16px] font-montserrat  transition-all duration-300 transform hover:scale-105 mb-10"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className=" bg-gradient-to-r from-blue-200 to-purple-300">
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
