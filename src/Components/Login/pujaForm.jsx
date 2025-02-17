
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PujaForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    location: "", // New field for location
    date: "", // New field for date
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5008/api/puja", formData);
      alert("Puja added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error submitting puja:", error);
      alert("Error adding puja!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="relative max-w-lg w-full bg-white rounded-xl shadow-2xl p-8">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
        >
          ❌
        </button>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ✨ Add Puja ✨
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Puja Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Puja Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Puja Name"
              required
            />
          </div>

          {/* Puja Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Puja Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Puja Description"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Puja Image URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Puja Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Puja Image URL"
            />
          </div>

          {/* Puja Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Puja Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
              placeholder="Enter Puja Price"
              required
            />
          </div>

          {/* Puja Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Puja Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter Puja Location"
              required
            />
          </div>

          {/* Puja Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Puja Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full text-black sm:w-auto bg-gradient-to-r from-blue-200 to-indigo-400 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Submit Puja
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PujaForm;
