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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-4  shadow-lg">
      <p className="text-[19px] font-montserrat text-gray-700">
        {texts[currentTextIndex]}
      </p>
      <div className="flex justify-center py-1">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="  h-14 w-14 rounded-full"
        />
      </div>
    </div>
  );
};

export default ReviewCarousel;
