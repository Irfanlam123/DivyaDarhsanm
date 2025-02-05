
import { useState } from "react";
import Footer from "../Footer/Footer";
import PujaCard from "./components/card";
import img1 from "../../assets/Pujas/cardimg.jpeg";
import img2 from "../../assets/Pujas/cardImg.jpeg";

function Puja() {
  const [searchTerm, setSearchTerm] = useState("");

const pujaDetails = [
  {
    title: "Hanuman Puja",
    imageUrl: img1,
    location: "Hanuman Temple, Delhi",
    date: "17th February 2025",
    participants: "300+",
    targetDate: "2025-02-17T18:00:00",
  },
  {
    title: "Shri Krishna Janmashtami",
    imageUrl: img2,
    location: "Banke Bihari Temple, Vrindavan",
    date: "14th August 2025",
    participants: "400+",
    targetDate: "2025-08-14T18:00:00",
  },
  {
    title: "Vishnu Sahasranama Puja",
    imageUrl: img1,
    location: "Vishnu Temple, Dwarka",
    date: "20th March 2025",
    participants: "500+",
    targetDate: "2025-03-20T18:00:00",
  },
  {
    title: "Ganesh Chaturthi Puja",
    imageUrl: img2,
    location: "Siddhivinayak Temple, Mumbai",
    date: "17th September 2025",
    participants: "1000+",
    targetDate: "2025-09-17T18:00:00",
  },
  {
    title: "Maha Shivaratri Puja",
    imageUrl: img1,
    location: "Mahakaleshwar Temple, Ujjain",
    date: "21st February 2025",
    participants: "600+",
    targetDate: "2025-02-21T18:00:00",
  },
  {
    title: "Aditi Puja",
    imageUrl: img2,
    location: "Aditya Temple, Gujarat",
    date: "10th March 2025",
    participants: "200+",
    targetDate: "2025-03-10T18:00:00",
  },
  {
    title: "Agni Puja",
    imageUrl: img1,
    location: "Agni Temple, Rajasthan",
    date: "5th April 2025",
    participants: "300+",
    targetDate: "2025-04-05T18:00:00",
  },
  {
    title: "Lakshmi Puja",
    imageUrl: img2,
    location: "Lakshmi Temple, Lucknow",
    date: "15th November 2025",
    participants: "400+",
    targetDate: "2025-11-15T18:00:00",
  },
  {
    title: "Prajapatis Puja",
    imageUrl: img1,
    location: "Prajapati Temple, Rajasthan",
    date: "5th January 2025",
    participants: "150+",
    targetDate: "2025-01-05T18:00:00",
  },
  {
    title: "Rama Puja",
    imageUrl: img2,
    location: "Rama Janmabhoomi, Ayodhya",
    date: "10th April 2025",
    participants: "500+",
    targetDate: "2025-04-10T18:00:00",
  },
  {
    title: "Balarama Puja",
    imageUrl: img1,
    location: "Balarama Temple, Odisha",
    date: "18th June 2025",
    participants: "300+",
    targetDate: "2025-06-18T18:00:00",
  },
  {
    title: "Brahma Puja",
    imageUrl: img2,
    location: "Brahma Temple, Pushkar",
    date: "15th May 2025",
    participants: "200+",
    targetDate: "2025-05-15T18:00:00",
  },
  {
    title: "Chandra Puja",
    imageUrl: img1,
    location: "Chandra Temple, Jaipur",
    date: "10th January 2025",
    participants: "150+",
    targetDate: "2025-01-10T18:00:00",
  },
  {
    title: "Indra Puja",
    imageUrl: img2,
    location: "Indra Temple, Varanasi",
    date: "25th March 2025",
    participants: "300+",
    targetDate: "2025-03-25T18:00:00",
  },
  {
    title: "Kamadeva Puja",
    imageUrl: img1,
    location: "Kamadeva Temple, Puri",
    date: "14th February 2025",
    participants: "200+",
    targetDate: "2025-02-14T18:00:00",
  },
  {
    title: "Saraswati Puja",
    imageUrl: img2,
    location: "Saraswati Temple, Varanasi",
    date: "12th February 2025",
    participants: "250+",
    targetDate: "2025-02-12T18:00:00",
  },
  {
    title: "Varuna Puja",
    imageUrl: img1,
    location: "Varuna Temple, Kashi",
    date: "17th January 2025",
    participants: "150+",
    targetDate: "2025-01-17T18:00:00",
  },
  {
    title: "Yama Puja",
    imageUrl: img2,
    location: "Yama Temple, Bhopal",
    date: "20th February 2025",
    participants: "180+",
    targetDate: "2025-02-20T18:00:00",
  },
  {
    title: "Acyutah Puja",
    imageUrl: img1,
    location: "Acyutah Temple, Mathura",
    date: "22nd May 2025",
    participants: "250+",
    targetDate: "2025-05-22T18:00:00",
  },
  {
    title: "Annapurna Devi Mata Puja",
    imageUrl: img2,
    location: "Annapurna Temple, Varanasi",
    date: "30th January 2025",
    participants: "350+",
    targetDate: "2025-01-30T18:00:00",
  },
  {
    title: "Anumati Puja",
    imageUrl: img1,
    location: "Anumati Temple, Rajasthan",
    date: "5th May 2025",
    participants: "200+",
    targetDate: "2025-05-05T18:00:00",
  },
  {
    title: "Ayyappan Puja",
    imageUrl: img2,
    location: "Ayyappan Temple, Kerala",
    date: "10th December 2025",
    participants: "500+",
    targetDate: "2025-12-10T18:00:00",
  },
  {
    title: "Brahman Puja",
    imageUrl: img1,
    location: "Brahman Temple, Maharashtra",
    date: "12th June 2025",
    participants: "400+",
    targetDate: "2025-06-12T18:00:00",
  },
  {
    title: "Durga Puja",
    imageUrl: img2,
    location: "Durga Temple, Kolkata",
    date: "5th October 2025",
    participants: "1000+",
    targetDate: "2025-10-05T18:00:00",
  },





   {
     title: "Shri Kaal Bhairav Aapda Haran",
     imageUrl: img1,
     location: "Shri Kaal Bhairav Temple, Varanasi",
     date: "18th January 2025",
     participants: "120+",
     targetDate: "2025-01-18T18:00:00",
   },
   {
     title: "Shri Vishwanath Puja",
     imageUrl: img2,
     location: "Kashi Vishwanath Temple, Varanasi",
     date: "18th January 2025",
     participants: "150+",
     targetDate: "2025-01-18T18:00:00",
   },
   {
     title: "Ram Janmabhoomi Puja",
     imageUrl: img1,
     location: "Ram Janmabhoomi, Ayodhya",
     date: "14th April 2025",
     participants: "500+",
     targetDate: "2025-04-14T18:00:00",
   },
   {
     title: "Hanuman Garhi Special Puja",
     imageUrl: img2,
     location: "Hanuman Garhi Temple, Ayodhya",
     date: "15th April 2025",
     participants: "200+",
     targetDate: "2025-04-15T18:00:00",
   },
   {
     title: "Kumbh Mela Puja",
     imageUrl: img1,
     location: "Prayagraj, Kumbh Mela",
     date: "1st February 2025",
     participants: "1000+",
     targetDate: "2025-02-01T18:00:00",
   },
   {
     title: "Triveni Sangam Aarti",
     imageUrl: img2,
     location: "Triveni Sangam, Prayagraj",
     date: "1st February 2025",
     participants: "500+",
     targetDate: "2025-02-01T18:00:00",
   },
   {
     title: "Banke Bihari Puja",
     imageUrl: img1,
     location: "Banke Bihari Temple, Vrindavan",
     date: "14th January 2025",
     participants: "300+",
     targetDate: "2025-01-14T18:00:00",
   },
   {
     title: "Shri Krishna Janmashtami",
     imageUrl: img2,
     location: "Shri Krishna Janmabhoomi, Vrindavan",
     date: "14th January 2025",
     participants: "400+",
     targetDate: "2025-01-14T18:00:00",
   },
   {
     title: "Vishnupad Mandir Puja",
     imageUrl: img1,
     location: "Vishnupad Temple, Gaya",
     date: "20th February 2025",
     participants: "200+",
     targetDate: "2025-02-20T18:00:00",
   },
   {
     title: "Maha Rudra Yajna",
     imageUrl: img2,
     location: "Brahmayoni Temple, Gaya",
     date: "20th February 2025",
     participants: "250+",
     targetDate: "2025-02-20T18:00:00",
   },
   {
     title: "Mahakaleshwar Puja",
     imageUrl: img1,
     location: "Mahakaleshwar Temple, Ujjain",
     date: "14th January 2025",
     participants: "300+",
     targetDate: "2025-01-14T18:00:00",
   },
   {
     title: "Maha Shivaratri Puja",
     imageUrl: img2,
     location: "Mahakaleshwar Temple, Ujjain",
     date: "20th February 2025",
     participants: "500+",
     targetDate: "2025-02-20T18:00:00",
   },
   {
     title: "Jagannath Rath Yatra",
     imageUrl: img1,
     location: "Jagannath Temple, Puri",
     date: "25th June 2025",
     participants: "1000+",
     targetDate: "2025-06-25T18:00:00",
   },
   {
     title: "Puri Ganga Aarti",
     imageUrl: img2,
     location: "Dashashwamedh Ghat, Puri",
     date: "25th June 2025",
     participants: "700+",
     targetDate: "2025-06-25T18:00:00",
   },
   {
     title: "Salarjung Museum Puja",
     imageUrl: img1,
     location: "Salarjung Museum, Hyderabad",
     date: "5th March 2025",
     participants: "400+",
     targetDate: "2025-03-05T18:00:00",
   },
   {
     title: "Birla Mandir Hyderabad Puja",
     imageUrl: img2,
     location: "Birla Mandir, Hyderabad",
     date: "5th March 2025",
     participants: "500+",
     targetDate: "2025-03-05T18:00:00",
   },
   {
     title: "Shirdi Sai Baba Puja",
     imageUrl: img1,
     location: "Sai Baba Temple, Shirdi",
     date: "25th April 2025",
     participants: "600+",
     targetDate: "2025-04-25T18:00:00",
   },
   {
     title: "Shani Shingnapur Puja",
     imageUrl: img2,
     location: "Shani Shingnapur Temple, Maharashtra",
     date: "10th May 2025",
     participants: "700+",
     targetDate: "2025-05-10T18:00:00",
   },
   {
     title: "Sri Venkateswara Puja",
     imageUrl: img1,
     location: "Tirumala Venkateswara Temple, Andhra Pradesh",
     date: "14th March 2025",
     participants: "1000+",
     targetDate: "2025-03-14T18:00:00",
   },
   {
     title: "Sabarimala Ayyappa Puja",
     imageUrl: img2,
     location: "Sabarimala Temple, Kerala",
     date: "20th January 2025",
     participants: "500+",
     targetDate: "2025-01-20T18:00:00",
   },
   {
     title: "Meenakshi Temple Puja",
     imageUrl: img1,
     location: "Meenakshi Temple, Tamil Nadu",
     date: "22nd March 2025",
     participants: "600+",
     targetDate: "2025-03-22T18:00:00",
   },
   {
     title: "Ramanathaswamy Temple Puja",
     imageUrl: img2,
     location: "Ramanathaswamy Temple, Tamil Nadu",
     date: "22nd March 2025",
     participants: "400+",
     targetDate: "2025-03-22T18:00:00",
   },
   {
     title: "Vishnu Sahasranama Puja",
     imageUrl: img1,
     location: "Kailasanathar Temple, Tamil Nadu",
     date: "15th May 2025",
     participants: "500+",
     targetDate: "2025-05-15T18:00:00",
   },
   {
     title: "Kadri Manjunath Puja",
     imageUrl: img2,
     location: "Kadri Manjunath Temple, Karnataka",
     date: "8th June 2025",
     participants: "350+",
     targetDate: "2025-06-08T18:00:00",
   },
   {
     title: "Bangalore Bull Temple Puja",
     imageUrl: img1,
     location: "Bull Temple, Bangalore",
     date: "8th June 2025",
     participants: "400+",
     targetDate: "2025-06-08T18:00:00",
   },
   {
     title: "Ratha Yatra",
     imageUrl: img2,
     location: "Kochi, Kerala",
     date: "25th June 2025",
     participants: "600+",
     targetDate: "2025-06-25T18:00:00",
   },
   // Add more puja details for other locations...
 ];



  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter pujas based on search term
  const filteredPujas = pujaDetails.filter((puja) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      puja.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      puja.location.toLowerCase().includes(lowerCaseSearchTerm) ||
      puja.date.toLowerCase().includes(lowerCaseSearchTerm) ||
      puja.targetDate.includes(searchTerm) // To support date-based search
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 max-w-6xl mx-auto">
        <div className="px-4 bg-slate-800 rounded-md flex flex-col items-center justify-center pb-8 w-full">
          {/* Title */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-50 font-bold py-6 text-center">
            卐 Upcoming Puja 卐
          </p>

          {/* Search Box */}
          <div className="mt-3 w-full flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              className="bg-slate-50 text-slate-950 rounded-full px-6 py-2 font-montserrat w-full sm:w-1/3"
              placeholder="Search by Date, Month, Title, or Location"
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
              No Puja found for this search criteria
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Puja;
