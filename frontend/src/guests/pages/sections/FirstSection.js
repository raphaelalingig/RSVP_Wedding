import React from "react";
import Background from "../Background";
import giftIcon from "../../assets/icons/envelope-icon.gif";
// import SampleImage from "../path-to-sample-image.jpg";

export default function FirstSection() {
  return (
    <Background>
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="flex items-center w-full h-screen">
          {/* Left image with border */}

          <div className="hidden md:flex md:w-full rounded-l-lg overflow-hidden shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/front-view-happy-bride-groom-holding-together-knife-concentrating-cutting-wedding-cake-while-standing-background_8353-11868.jpg?t=st=1734287918~exp=1734291518~hmac=e7b14e0d6fb5abadef8adc209454ffa14ce3b54fc442fcb8b5ed68cad37a2375&w=826"
              alt="Image"
              className="object-contain mx-auto rounded-lg transform transition duration-300 hover:scale-105 w-4/5 md:w-4/5"
            />
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center justify-center w-full sm:w-3/4 h-full">
            <h1 className="font-aniyah text-5xl sm:text-5xl text-white">
              Ronald
              <span className="font-serif text-xl sm:text-2xl block">
                Dañas
              </span>
            </h1>
            <div className="text-xl sm:text-2xl block text-white italic">
              and
            </div>
            <div className="relative mt-12">
              <h1 className="font-aniyah text-5xl sm:text-5xl text-white">
                Leahlaine
                <span className="mt-3 font-serif text-xl sm:text-2xl block">
                  Layzon
                </span>
              </h1>
            </div>
            <div className="mt-12">
              <h1 className="mt-3 font-serif text-xl sm:text-xl block text-white">
                JOIN US FOR OUR SPECIAL WEDDING DAY ON
              </h1>

              <h1 className="mt-3 font-serif text-xl sm:text-xl block text-white">
                MONDAY 20TH JANUARY, 2025
              </h1>

              <h1 className="mt-3 font-serif text-xl sm:text-xl block text-white">
                CEREMONY WILL START AT 3:00 P.M. SAN GUILLERMO DE MALEVAL PARISH
                IPONAN, CAGAYAN DE ORO CITY
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-4">
          <img src={giftIcon} alt="Gift Icon" className="w-27"/>
        </div>
      </div>
    </Background>
  );
}
