import React, { useEffect, useState, useRef } from "react";
import "../../css/Carousel.css";
import firstpic from "../../assets/wedding-pictures/cf4a0fcd-d6b2-4fbc-87d7-43d834b8cca5_20241219_145000_0000.jpg";
import secondpic from "../../assets/wedding-pictures/af626a63-2cdc-4809-beb9-1e7dfb7572ec_20241219_145118_0000.jpg";
import thirdpic from "../../assets/wedding-pictures/37321513-4c85-4058-809c-10ec3e766ebc_20241219_135005_0000.jpg";
import fourthpic from "../../assets/wedding-pictures/35681dc4-a292-4fb2-9912-47ac372582dd_20241219_135954_0000.jpg";
import fifthpic from "../../assets/wedding-pictures/7acd7fc0-e0b1-470d-ada1-7edf1e824dd7_20241219_145037_0000.jpg";
import { Clock } from "lucide-react";

export default function CarouselSection() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const sectionRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-20T00:00:00+08:00").getTime(); // January 20, 2025 PH time

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleImageClick = (imageSrc) => {
    setFullscreenImage(imageSrc);
    setIsFullScreen(true);

    // Scroll to the section with smooth behavior
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    setIsFullScreen(false);
  };

  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullScreen]);

  return (
    <>
      <div
        ref={sectionRef}
        className="flex items-center flex-col absolute top-12"
      >
        <h2 className="font-aniyah text-white text-4xl font-dancing-script mb-2">
          Ronald and Leah
        </h2>
        <p className="text-gray-400 tracking-widest">01.20.25</p>
      </div>
      <div
        className="flex justify-center items-baseline relative z-40 w-[450px] h-72 pt-12 overflow-hidden
        lg:w-full lg:h-96 lg:pt-6"
      >
        <img
          src={firstpic}
          className="pic01 cursor-pointer"
          onClick={() => handleImageClick(firstpic)}
        />
        <img
          src={fourthpic}
          className="pic02 cursor-pointer"
          onClick={() => handleImageClick(fourthpic)}
        />
        <img
          src={secondpic}
          className="pic03 cursor-pointer"
          onClick={() => handleImageClick(secondpic)}
        />
        <img
          src={thirdpic}
          className="pic04 cursor-pointer"
          onClick={() => handleImageClick(thirdpic)}
        />
        <img
          src={fifthpic}
          className="pic05 cursor-pointer"
          onClick={() => handleImageClick(fifthpic)}
        />
      </div>

      <div className="timer flex items-center absolute bottom-8 left-1/2 -translate-x-1/2 gap-4 bg-black/5 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/10">
        {" "}
        <Clock className="w-8 h-8 text-white" />
        <div className="flex gap-4">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="bg-black text-white px-4 py-2 rounded-lg font-mono text-2xl min-w-[4rem] text-center">
              {timeLeft.days}
            </div>
            <span className="text-xs uppercase tracking-wider mt-1 text-white font-medium">
              Days
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-black text-white px-4 py-2 rounded-lg font-mono text-2xl min-w-[4rem] text-center">
              {timeLeft.hours}
            </div>
            <span className="text-xs uppercase tracking-wider mt-1 text-white font-medium">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="bg-black text-white px-4 py-2 rounded-lg font-mono text-2xl min-w-[4rem] text-center">
              {timeLeft.minutes}
            </div>
            <span className="text-xs uppercase tracking-wider mt-1 text-white font-medium">
              Minutes
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="bg-black text-white px-4 py-2 rounded-lg font-mono text-2xl min-w-[4rem] text-center">
              {timeLeft.seconds}
            </div>
            <span className="text-xs uppercase tracking-wider mt-1 text-white font-medium">
              Seconds
            </span>
          </div>
        </div>
      </div>

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeFullscreen}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={fullscreenImage}
              className="max-h-full max-w-full w-auto h-auto object-contain cursor-pointer rounded-lg
                sm:max-h-[90vh] sm:max-w-[90vw]
                md:max-h-[85vh] md:max-w-[85vw]
                lg:max-h-[80vh] lg:max-w-[80vw]"
              alt="Fullscreen view"
              onClick={closeFullscreen}
            />
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 
                hover:bg-opacity-70 focus:outline-none sm:top-4 sm:right-4"
              onClick={closeFullscreen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
