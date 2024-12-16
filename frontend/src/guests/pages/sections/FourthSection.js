import React from "react";
import Background from "../Background";
import dressCode_1 from "../../assets/dress-code/dress-code_1.png";
import dressCode_2 from "../../assets/dress-code/dress-code_2.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FourthSection() {
  AOS.init();
  return (
    <Background>
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
        <div className="max-w-4xl mx-auto px-4 py-10 font-sans">
          {/* Header */}
          <div className="text-white text-center mb-8">
            <h1 className="text-lg font-bold tracking-wide">RONALD & LEAH</h1>
            <h2 className="text-lg font-bold tracking-wide">20 JAN 2025</h2>
          </div>

          {/* Attire Guide Section */}
          <div className="text-white">
            <h3 className=" text-4xl font-serif mb-4">ATTIRE GUIDE</h3>
            <hr className="border-t-2 border-dotted mb-4" />
            <p className="text-sm mb-2">
              We are having a{" "}
              <span className="text-yellow-300 font-bold underline">
                Black Wedding Theme
              </span>
              . We politely ask that NO colored or white outfits for all our
              guests.
            </p>

            {/* Principal Sponsors */}
            <div className="mt-6">
              <h4 className="text-yellow-300 font-bold text-lg mb-2">
                Principal Sponsors
              </h4>
              <p className="text-sm">
                Ninong: Black Suit or Black Barong Tagalog
              </p>
              <p className="text-sm mb-4">
                Ninang: Black Long Gown or Black Formal Dress
              </p>

              {/* Placeholder Images */}
              <div className="flex justify-center mb-4">
                <div
                  data-aos="zoom-in"
                  className="h-64 bg-gray-300 flex items-center justify-center"
                >
                  <span>
                    <img
                      src={dressCode_1}
                      alt="Dress Code 1"
                      className="h-64"
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="mt-6">
              <h4 className="text-yellow-300 font-bold text-lg mb-2">Guests</h4>
              <p className="text-sm mb-4">
                Black Formal or Semi-Formal Attire or Cocktail Dress
              </p>

              {/* Placeholder Images */}
              <div className="flex justify-center">
                <div
                  data-aos="zoom-in"
                  className="h-64 bg-gray-300 flex items-center justify-center"
                >
                  <span>
                    <img
                      src={dressCode_2}
                      alt="Dress Code 2"
                      className="h-64"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Guide Section */}
          <div className="mt-10 text-white">
            <h3 className="text-yellow-300 text-4xl font-serif mb-4">
              GIFT GUIDE
            </h3>
            <hr className="border-t-2 border-dotted mb-4" />
            <p className="text-sm">
              Your presence and prayers are all that we request, but if you
              desire to give nonetheless, a monetary gift is one we suggest.
            </p>
          </div>
        </div>
      </div>
    </Background>
  );
}
