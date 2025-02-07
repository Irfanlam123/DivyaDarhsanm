import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { X } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gotra: "",
    phone: "",
    email: "",
    password: "",
    dakshina: "",
    vastra: false,
    kambal: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5003/api/auth/signup",
        user
      );
      alert(response.data.message);
      setUser({
        name: "",
        gotra: "",
        phone: "",
        email: "",
        password: "",
        dakshina: "",
        vastra: false,
        kambal: false,
      });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Signup
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="gotra"
            placeholder="Gotra"
            value={user.gotra}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="number"
            name="dakshina"
            placeholder="Dakshina to Brahman (₹)"
            value={user.dakshina}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="vastra"
              checked={user.vastra}
              onChange={handleChange}
              className="w-5 h-5 text-purple-600"
            />
            <label className="text-gray-700">Bharman Vastra</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="kambal"
              checked={user.kambal}
              onChange={handleChange}
              className="w-5 h-5 text-purple-600"
            />
            <label className="text-gray-700">Kambal Seva</label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Signup
          </button>
        </form>
        <p className="text-gray-500 text-center mt-4">
          Already have an account?
          <a href="#" className="text-purple-600 hover:underline font-semibold">
            {" "}
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
