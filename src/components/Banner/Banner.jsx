import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <section className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        emulateTouch={true}>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="Carousel image"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="Carousel image"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="Carousel image"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
