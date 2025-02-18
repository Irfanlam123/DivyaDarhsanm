

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { X } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5008/api/auth/signup",
        user,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert(response.data.message || "Signup Successful");
      setUser({ name: "", phone: "", email: "", password: "" });
      navigate("/");
    } catch (error) {
      alert(
        "Error: " + (error.response?.data?.error || "Something went wrong")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm relative">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Signup"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-gray-500 text-center mt-3 text-sm">
          Already have an account?
          <span
            className="text-purple-600 hover:underline font-medium cursor-pointer"
            onClick={() => navigate("/login")}
          >
            {" "}
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

