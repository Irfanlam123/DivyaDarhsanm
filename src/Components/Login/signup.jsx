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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", user);

    try {
      const response = await axios.post(
        "http://localhost:5006/api/auth/signup",
        user
      );
      alert(response.data.message);

      setUser({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm relative">
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
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-300"
          >
            Signup
          </button>
        </form>
        <p className="text-gray-500 text-center mt-3 text-sm">
          Already have an account?
          <a href="#" className="text-purple-600 hover:underline font-medium">
            {" "}
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
