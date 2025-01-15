import React, { useState, useEffect } from "react";

const TextCarousel = () => {
  const texts = [
    "卐 धर्मो रक्षति रक्षित: 卐",
    "卐 ॐ नमः शिवाय ! 卐",
    "卐 नमामि गंगे ! 卐",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-4 border rounded-lg shadow-lg max-w-md mx-auto">
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500">
        {texts[currentTextIndex]}
      </p>
    </div>
  );
};

export default TextCarousel;
