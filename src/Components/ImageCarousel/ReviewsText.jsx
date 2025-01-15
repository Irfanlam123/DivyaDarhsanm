import React, { useState, useEffect } from "react";

const ReviewCarousel = () => {
  const texts = [
    "Attending the pujas at [Mandir Name] has been a truly divine experience. The spiritual energy, serene environment, and the devotion of the priests make every ritual feel deeply meaningful. Whether it's the daily aarti or the grand celebrations during festivals, the atmosphere here is always uplifting.",
    "The puja arrangements are meticulously planned, ensuring a smooth and peaceful experience for devotees. The mandir management ensures that all rituals are performed according to traditional customs, maintaining the sanctity and authenticity of the experience.",
    "Festivals like Navratri, Janmashtami, and Diwali are celebrated with grandeur at the mandir. The decorations, special pujas, and cultural programs make these events unforgettable. It’s a delight to witness the devotion and community spirit during these occasions.",
    "The priests at the mandir are well-versed in Vedic traditions and explain the significance of each ritual in a way that connects with modern devotees. Their chants and mantras resonate deeply, adding to the spiritual ambiance.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="text-center p-4 shadow-lg">
      {/* Review text */}
      <p className="text-[19px] font-montserrat text-gray-700">
        {texts[currentTextIndex]}
      </p>

      {/* Image below the review */}
      <div className="flex justify-center py-1">
        <img
          src="data:image/jpeg;base64,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"
          alt="Mandir Image"
          className="w-40 h-40 object-cover rounded-full shadow-md"
        />
      </div>
    </div>
  );
};

export default ReviewCarousel;
