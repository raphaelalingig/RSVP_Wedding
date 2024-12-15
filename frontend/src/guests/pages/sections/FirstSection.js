import React from "react";
import Background from "../Background";
// import SampleImage from "../path-to-sample-image.jpg";

export default function FirstSection() {
  return (
    <Background>
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="flex w-full h-screen">
          {/* Left image with border */}

          <div className="hidden md:flex md:w-full rounded-l-lg overflow-hidden shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/front-view-happy-bride-groom-holding-together-knife-concentrating-cutting-wedding-cake-while-standing-background_8353-11868.jpg?t=st=1734287918~exp=1734291518~hmac=e7b14e0d6fb5abadef8adc209454ffa14ce3b54fc442fcb8b5ed68cad37a2375&w=826"
              alt="Image"
              className="object-contain mx-auto rounded-lg transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center justify-center w-full sm:w-3/4 h-full">
            <h1 className="font-aniyah text-6xl sm:text-6xl text-white">
              Ronald
              <span className="font-serif text-xl sm:text-2xl block">
                Dañas
              </span>
            </h1>
            <div className="text-xl sm:text-2xl block text-white italic">
              and
            </div>
            <div className="relative mt-12">
              <h1 className="font-aniyah text-6xl sm:text-6xl text-white">
                Leah
                <span className="mt-3 font-serif text-xl sm:text-2xl block text-center">
                  LAYSON
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
