import { useState } from "react";

const ReviewsForm = () => {
  const [name, setName] = useState("");
  const [pooja, setPooja] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g., sending data to an API or saving it)
    alert("Review submitted!");
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen flex flex-col justify-center items-center py-6">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl font-montserrat text-orange-400 mb-6">
        Submit Your Review
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-950 mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-950 mb-2"
          >
            Your Pooja
          </label>
          <input
            type="text"
            id="pooja"
            value={pooja}
            onChange={(e) => setPooja(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your Pooja"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="review"
            className="block text-lg font-semibold text-gray-950 mb-2"
          >
            Your Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Write your review here"
            rows="6"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewsForm;
