import { useState } from "react";
import Footer from "../Footer/Footer";
import PujaCard from "./components/card";
import img1 from "../../assets/Pujas/cardimg.jpeg";
import img2 from "../../assets/Pujas/cardImg.jpeg";

function Puja() {
  const [searchTerm, setSearchTerm] = useState("");

  const pujaDetails = [
    {
      title: "Shri Kaal Bhairav Aapda Haran ",
      imageUrl: img1,
      location: "Shri Kaal Bhairav Temple, Kashi",
      date: "18th January 2025",
      participants: "120+",
      targetDate: "2025-01-18T18:00:00",
    },
    {
      title: "Somwar Mahamrityunjay Mantra",
      imageUrl: img2,
      location: "Mahamrityunjay Temple, Kashi",
      date: "6-march-2025, Pasuh Maas",
      participants: "109+",
      targetDate: "2025-02-07T18:00:00",
    },
    {
      title: "Makar Sankranti Special Brahman",
      imageUrl: img1,
      location: "Ganga Ghat, Kashi",
      date: "28-feb-2025",
      participants: "158+",
      targetDate: "2025-01-28T18:00:00",
    },
    {
      title: "Mahashivaratri Special Puja",
      imageUrl: img1,
      location: "Kashi Vishwanath Temple, Kashi",
      date: "20th February 2025",
      participants: "200+",
      targetDate: "2025-02-20T18:00:00",
    },
    {
      title: "Navratri Durga Puja",
      imageUrl: img2,
      location: "Durga Mandir, Varanasi",
      date: "25th March 2025",
      participants: "250+",
      targetDate: "2025-03-25T18:00:00",
    },
    {
      title: "Ganga Aarti",
      imageUrl: img1,
      location: "Dashashwamedh Ghat, Kashi",
      date: "15th April 2025",
      participants: "300+",
      targetDate: "2025-04-15T18:00:00",
    },
    {
      title: "Hanuman Jayanti Special Puja",
      imageUrl: img2,
      location: "Hanuman Mandir, Kashi",
      date: "15th April 2025",
      participants: "180+",
      targetDate: "2025-04-15T18:00:00",
    },
    {
      title: "Vasant Panchami Puja",
      imageUrl: img1,
      location: "Saraswati Mandir, Kashi",
      date: "25th January 2025",
      participants: "150+",
      targetDate: "2025-01-25T18:00:00",
    },
    {
      title: "Tulsidas Jayanti Puja",
      imageUrl: img2,
      location: "Tulsi Manas Mandir, Kashi",
      date: "12th February 2025",
      participants: "120+",
      targetDate: "2025-02-12T18:00:00",
    },
    {
      title: "Ram Navami Puja",
      imageUrl: img1,
      location: "Ram Janmabhoomi, Ayodhya",
      date: "14th April 2025",
      participants: "500+",
      targetDate: "2025-04-14T18:00:00",
    },
    {
      title: "Shani Jayanti Puja",
      imageUrl: img2,
      location: "Shani Temple, Kashi",
      date: "5th May 2025",
      participants: "90+",
      targetDate: "2025-05-05T18:00:00",
    },
    {
      title: "Baisakhi Puja",
      imageUrl: img1,
      location: "Guru Nanak Gurdwara, Kashi",
      date: "13th April 2025",
      participants: "110+",
      targetDate: "2025-04-13T18:00:00",
    },
    {
      title: "Guru Purnima Puja",
      imageUrl: img2,
      location: "Varanasi Gyan Mandir",
      date: "5th July 2025",
      participants: "220+",
      targetDate: "2025-07-05T18:00:00",
    },
    {
      title: "Maha Rudra Yajna",
      imageUrl: img1,
      location: "Kashi Vishwanath Temple, Kashi",
      date: "1st June 2025",
      participants: "300+",
      targetDate: "2025-06-01T18:00:00",
    },
    {
      title: "Ashadh Ekadashi Puja",
      imageUrl: img2,
      location: "Chandra Prabhu Jain Temple, Kashi",
      date: "3rd July 2025",
      participants: "150+",
      targetDate: "2025-07-03T18:00:00",
    },
    {
      title: "Onam Special Puja",
      imageUrl: img1,
      location: "Kerala Sree Narayana Mandir, Kashi",
      date: "22nd August 2025",
      participants: "170+",
      targetDate: "2025-08-22T18:00:00",
    },
    {
      title: "Janmashtami Special Puja",
      imageUrl: img2,
      location: "ISKCON, Kashi",
      date: "29th August 2025",
      participants: "250+",
      targetDate: "2025-08-29T18:00:00",
    },
    {
      title: "Ganesh Chaturthi",
      imageUrl: img1,
      location: "Ganesh Mandir, Kashi",
      date: "17th September 2025",
      participants: "400+",
      targetDate: "2025-09-17T18:00:00",
    },
    {
      title: "Diwali Lakshmi Puja",
      imageUrl: img2,
      location: "Kashi Vishwanath Temple, Kashi",
      date: "12th November 2025",
      participants: "800+",
      targetDate: "2025-11-12T18:00:00",
    },
    {
      title: "Karwa Chauth Puja",
      imageUrl: img1,
      location: "Shankar Mandir, Kashi",
      date: "24th October 2025",
      participants: "300+",
      targetDate: "2025-10-24T18:00:00",
    },
    {
      title: "Dussehra Puja",
      imageUrl: img2,
      location: "Ramlila Maidan, Kashi",
      date: "22nd October 2025",
      participants: "350+",
      targetDate: "2025-10-22T18:00:00",
    },
    {
      title: "Chhath Puja",
      imageUrl: img1,
      location: "Ganga Ghat, Kashi",
      date: "18th November 2025",
      participants: "500+",
      targetDate: "2025-11-18T18:00:00",
    },
    {
      title: "Bhai Dooj Puja",
      imageUrl: img2,
      location: "Sankat Mochan Mandir, Kashi",
      date: "15th November 2025",
      participants: "200+",
      targetDate: "2025-11-15T18:00:00",
    },
    {
      title: "Maha Shivaratri 2025",
      imageUrl: img1,
      location: "Kashi Vishwanath, Kashi",
      date: "19th February 2025",
      participants: "500+",
      targetDate: "2025-02-19T18:00:00",
    },
    // More pujas...
  ];


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter pujas based on the targetDate and searchTerm (partial match for date and month)
  const filteredPujas = pujaDetails.filter((puja) => {
    const targetDate = puja.targetDate;
    // Check if the searchTerm is a partial match for the targetDate (e.g., year or month)
    return (
      targetDate.includes(searchTerm) ||
      puja.date.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 max-w-6xl mx-auto">
        <div className="px-4 bg-slate-800 rounded-md flex flex-col items-center justify-center pb-8 w-full">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-50 font-bold py-6">
            卐 Upcoming Puja 卐
          </p>

          <div className="mt-3 w-full sm:w-3/4 lg:w-1/2 flex justify-center">
            <input
              type="text"
              className="bg-slate-50 text-slate-950 rounded-full px-16 py-2 font-montserrat"
              placeholder="Search Pujas by Date or Month"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Puja Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {filteredPujas.length > 0 ? (
            filteredPujas.map((puja, index) => (
              <PujaCard
                key={index}
                title={puja.title}
                imageUrl={puja.imageUrl}
                location={puja.location}
                date={puja.date}
                participants={puja.participants}
                targetDate={puja.targetDate}
              />
            ))
          ) : (
            <p className="text-center text-slate-700">
              No Puja found for this date or month
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Puja;
