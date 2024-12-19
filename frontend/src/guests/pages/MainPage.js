import React from "react";
import background from "../assets/background.svg";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import Background from "./Background";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";
import FifthSection from "./sections/FifthSection";
import CarouselSection from "./sections/CarouselSection";
import Carousel2 from "./sections/Carousel2";

export default function MainPage() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Background>
          <FirstSection />
        </Background>
      </div>
      <div className="w-full relative">
        <Background>
          <CarouselSection />
        </Background>
      </div>
      <div className="w-full ">
        <Background>
          <Carousel2 />
        </Background>
      </div>
      <div className="w-full">
        <Background>
          <SecondSection />
        </Background>
      </div>
      <div className="w-full">
        <Background>
          <ThirdSection />
        </Background>
      </div>
      <div className="w-full">
        <Background>
          <FourthSection />
        </Background>
      </div>
      <div className="w-full">
        <Background>
          <FifthSection />
        </Background>
      </div>
    </div>
  );
}
