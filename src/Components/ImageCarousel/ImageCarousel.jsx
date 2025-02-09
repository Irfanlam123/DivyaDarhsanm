import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import Temp1 from "../../../src/assets/temp1.jpg";
import Temp2 from "../../../src/assets/temp2.jpg";
// import Temp3 from "../../../src/assets/temp3.jpg";
import Temp4 from "../../../src/assets/Temp4.jpg";
import Temp5 from "../../../src/assets/temp5.jpg";

const ImageCarousel = () => {
  const images = [
    // {
    //   id: 1,
    //   src: Temp1,
    //   alt: "Slide 1",
    // },
    {
      id: 2,
      src: Temp2,
      alt: "Slide 2",
    },
    // {
    //   id: 3,
    //   src: Temp3,
    //   alt: "Slide 3",
    // },
    {
      id: 4,
      src: Temp4,
      alt: "Slide 3",
    },
    {
      id: 5,
      src: Temp5,
      alt: "Slide 3",
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
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover rounded-md h-[250px] sm:h-[400px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
