import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import TextCarousel from "../ImageCarousel/TextCarousel";
import { Link } from "react-router-dom";
import Design from "../Card/Card";
import Footer from "../Footer/Footer";
import FAQPage from "../Home/Components/FAQs";
import BookingIcon from "../../../src/assets/Homepage/BookingComplete.webp";
import PoojaIcon from "../../../src/assets/Homepage/Pooja.webp";
import FamilyIcon from "../../../src/assets/Homepage/AddFamily.webp";
import ReviewCarousel from "../ImageCarousel/ReviewsText";
import BlesingIcon from "../../assets/Homepage/Bless.webp";
import HeroImage from "../../assets/HeroImg.webp"

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
      name: "Choose Pooja",
      src: PoojaIcon,
    },
    {
      id: 2,
      name: "Add Family Data",
      src: FamilyIcon,
    },
    {
      id: 3,
      name: "Booking Complete",
      src: BookingIcon,
    },
    {
      id: 4,
      name: "Receive Blessing",
      src: BlesingIcon,
    },
  ];
  return (
    <div className="font-montserrat">
      <div className="relative p-2 shadow-2xl">
        <div className="flex flex-col justify-center items-center ">
          {/* Div Sections */}
          <div className="relative w-full overflow-hidden rounded-md">
            {/* Background Gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-200 to-blue-300"></div>
            <div className="relative w-full h-screen flex items-center justify-center text-center px-4 sm:px-8">
              {/* Hero Image with Overlay */}
              <div className="absolute inset-0 max-h-screen">
                <img
                  src={HeroImage}
                  alt="Hero Image"
                  className="w-full h-full object-cover object-center md:rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
              </div>

              {/* Hero Content */}
              <div className="relative z-10 max-w-2xl px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-12">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
                  Your Way to <br />
                  <span className="text-orange-400">Sanatan Dharma</span>
                </h1>

                <p className="mt-3 sm:mt-5 text-sm sm:text-lg md:text-xl text-slate-200 font-medium tracking-wide leading-relaxed">
                  Daily darshans, Puja rituals, and Chadhava offerings, all in
                  one place.
                </p>

                {/* CTA Button */}
                <div className="mt-4 sm:mt-6">
                  <Link
                    to="/Puja"
                    className="inline-block bg-gradient-to-r from-orange-400 to-yellow-300 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Puja Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-sm p-3 bg-gray-50 w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3">
        {/* Cards Section */}
        <div className=" flex flex-wrap items-center justify-center p-4 gap-4 flex-[2] w-full md:w-2/3">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="relative bg-gradient-to-r from-blue-100 to-slate-300 flex flex-col w-full sm:w-[calc(50%-1rem)] h-48 rounded-lg shadow-lg p-4 items-center hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              {/* Title text positioned over the image */}
              <h2 className="absolute top-2 left-2 right-2 text-lg font-bold text-white bg-black/50  py-0 rounded-full text-center"></h2>

              {/* Image container */}
              <div className="w-full h-full overflow-hidden bg-gray-300">
                <img
                  src={card.src}
                  alt=""
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Section */}
        <div className="bg-gradient-to-r from-blue-200 to-blue-300 flex-1 flex items-center justify-center rounded-lg p-3 w-full md:w-1/3 h-64 md:h-auto">
          <ImageCarousel />
        </div>
      </div>

      <div className="text-center py-4 md:py-6 px-4 max-w-screen-md mx-auto">
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
        <Design />
      </div>

      <div
        className=" bg-gradient-to-r from-blue-100 to-slate-300
               "
      >
        <div className="p-2 py-6">
          <h1 className="font-bold text-3xl font-montserrat text-orange-400 text-center">
            Featured Sevas
          </h1>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <div className="text-center">
              <p className="px-10 md:px-20 shadow-xl">
                <img
                  src="https://divyadarshanm.in/wp-content/uploads/2024/11/1.svg"
                  alt=""
                />
              </p>
              <p className="font-bold font-montserrat text-2xl px-10 md:px-32">
                Pooja
              </p>
            </div>
            <div className="text-center">
              <p className="px-10 md:px-20 shadow-xl">
                <img
                  src="https://divyadarshanm.in/wp-content/uploads/2024/11/2.svg"
                  alt=""
                />
              </p>
              <p className="font-bold font-montserrat text-2xl px-10 md:px-24">
                Annadaan
              </p>
            </div>
            <div className="text-center">
              <p className="px-10 md:px-20 shadow-xl">
                <img
                  src="https://divyadarshanm.in/wp-content/uploads/2024/11/3.svg"
                  alt=""
                />
              </p>
              <p className="font-bold font-montserrat text-2xl px-10 md:px-32">
                Gauseva
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <h1 className="font-bold text-2xl md:text-xl font-montserrat text-orange-400 flex justify-center py-6 px-4 md:px-0">
          Our Puja Kshetras Across Multiple States in India
        </h1>

        <div className="p-6 flex justify-center items-center w-full">
          <img
            className="w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] h-auto object-contain"
            src="https://divyadarshanm.in/wp-content/uploads/2024/11/map.svg"
            alt="Puja Kshetras Map"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-purple-200">
        <h1 className="font-bold text-xl sm:text-xl md:text-2xl font-montserrat text-orange-400 flex justify-center py-6 px-4 sm:px-0">
          Start Your Spiritual Journey
        </h1>

        <div className="flex justify-center">
          <Link
            to="/Puja"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-yellow-400 hover:to-orange-500 text-black py-2 px-6 rounded-sm text-sm sm:text-base md:text-lg font-montserrat transition-all duration-300 transform hover:scale-105 mb-10"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-200 to-purple-300 py-6">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl font-montserrat text-orange-400 text-center">
          Devotees' Review
        </h1>
        <p className="font-bold text-lg sm:text-xl md:text-2xl font-montserrat text-gray-950 text-center mt-2">
          Hear it from our blessed devotees
        </p>

        <div className="mt-8 px-4 sm:px-6 md:px-12">
          <ReviewCarousel />
        </div>

        {/* Reviews Button */}
        <div className="text-center mt-6">
          <Link
            to="/reviews-form"
            className="inline-block bg-orange-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Submit Your Review
          </Link>
        </div>
      </div>

      <FAQPage />
      <Footer />
    </div>
  );
};

export default Home;
