import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Aap apni images yahan import kar sakte hain
import Temp2 from "../../../src/assets/temp2.jpg";
import Temp4 from "../../../src/assets/Temp4.jpg";
import Temp5 from "../../../src/assets/temp5.jpg";

const ReviewCarousel = () => {
  const reviews = [
    {
      id: 1,
      text: "Attending the pujas at [Mandir Name] has been a truly divine experience. The spiritual energy, serene environment, and the devotion of the priests make every ritual feel deeply meaningful. Whether it's the daily aarti or the grand celebrations during festivals, the atmosphere here is always uplifting.",
      image: Temp2,
    },
    {
      id: 2,
      text: "The puja arrangements are meticulously planned, ensuring a smooth and peaceful experience for devotees. The mandir management ensures that all rituals are performed according to traditional customs, maintaining the sanctity and authenticity of the experience.",
      image: Temp4,
    },
    {
      id: 3,
      text: "Festivals like Navratri, Janmashtami, and Diwali are celebrated with grandeur at the mandir. The decorations, special pujas, and cultural programs make these events unforgettable. It’s a delight to witness the devotion and community spirit during these occasions.",
      image: Temp5,
    },
    {
      id: 4,
      text: "The priests at the mandir are well-versed in Vedic traditions and explain the significance of each ritual in a way that connects with modern devotees. Their chants and mantras resonate deeply, adding to the spiritual ambiance.",
      image: Temp2,
    },
  ];

  return (
    <div className="carousel-container w-full">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="text-center p-4 shadow-lg bg-white rounded-lg max-w-xl mx-auto"
          >
            {/* Review text */}
            <p className="text-[19px] font-montserrat text-gray-700 mb-4">
              {review.text}
            </p>

            {/* Image below the review */}
           
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
