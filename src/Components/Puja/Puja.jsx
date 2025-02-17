
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Puja = () => {
  // State to store API data
  const [pujaList, setPujaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data from API
  useEffect(() => {
    axios
      .get("http://localhost:5008/api/puja")
      .then((response) => {
        setPujaList(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch Puja data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="px-4 bg-slate-800 rounded-md flex flex-col items-center justify-center pb-8 w-full">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-50 font-bold py-6 text-center">
            卐 Upcoming Puja 卐
          </p>

          {/* Search Box */}
          <div className="mt-3 w-full flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              className="bg-slate-50 text-slate-950 rounded-full px-6 py-2 font-montserrat w-full sm:w-1/3"
              placeholder="Search by Date, Month, Title, or Location"
            />
          </div>
        </div>

        {/* Loading & Error Handling */}
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}

        {/* Display Puja Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pujaList.map((puja, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              {/* Puja Image */}
              {puja.image && (
                <img
                  src={puja.image}
                  alt={puja.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              {/* Puja Name - Centered */}
              <h2 className="text-2xl font-bold text-center text-slate-900 mt-3">
                {puja.name}
              </h2>
              {/* Puja Description */}
              <p className="mt-3 text-gray-700 text-center">
                {puja.description}
              </p>
              {/* Puja Location & Date (Left Aligned) */}
              <p className="text-[#6A0DAD] text-left mt-3">
                📍 {puja.location}
              </p>
              <p className="text-[#0056b3] text-left mt-1">
                📅 {new Date(puja.date).toLocaleDateString("en-GB")}
              </p>

              {/* Book Now Button inside Link */}
              <div className="mt-4 flex justify-center">
                <Link
                  to={`/book/${puja.id}`}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-yellow-500 hover:to-orange-400 text-white px-4 py-2 rounded-full font-semibold transition shadow-md"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Puja;
