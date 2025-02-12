import React from "react";
import topLeftFloral from "../assets/floral/floral-top-left.png";
import bottomRightFloral from "../assets/floral/floral-bottom-right.png";
import topRightFloral from "../assets/floral/floral-top-right.png";
import bottomLeftFloral from "../assets/floral/floral-bottom-left.png";
import background from "../assets/background.svg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Background({ children }) {
  AOS.init();
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Top Left Decoration */}
      <div
        data-aos="fade-down-right"
        className="absolute top-0 left-0 w-24 sm:w-40 lg:w-64"
      >
        <img src={topLeftFloral} alt="Top Left Floral" />
      </div>

      {/* Top Right Decoration */}
      <div
        data-aos="fade-down-left"
        className="absolute top-0 right-0 w-24 sm:w-40 lg:w-64"
      >
        <img src={topRightFloral} alt="Top Right Floral" />
      </div>

      {/* Bottom Left Decoration */}
      <div
        data-aos="fade-up-right"
        className="absolute bottom-0 left-0 w-24 sm:w-40 lg:w-64"
      >
        <img src={bottomLeftFloral} alt="Bottom Left Floral" />
      </div>

      {/* Bottom Right Decoration */}
      <div
        data-aos="fade-up-left"
        className="absolute bottom-0 right-0 w-24 sm:w-40 lg:w-64"
      >
        <img src={bottomRightFloral} alt="Bottom Right Floral" />
      </div>

      {/* Borders */}
      <div className="absolute top-0 left-0 w-full border-t border-white"></div>
      <div className="absolute bottom-0 left-0 w-full border-b border-white"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
        {children}
      </div>
    </div>
  );
}
