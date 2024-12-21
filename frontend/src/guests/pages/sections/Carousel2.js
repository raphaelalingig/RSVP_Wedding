import React, { useState, useEffect } from "react";
import Background from "../Background";

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786049/WeddingPictures/fpqq3rzcasybdl6sxyud.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786035/WeddingPictures/b4kwvzmfjvbc7jsso7g5.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786037/WeddingPictures/lwpynesx5flx5ja3vpsh.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786047/WeddingPictures/csq0yc0qmccthly7jicm.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786046/WeddingPictures/shlq8vhli5m5otfr9w3b.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786037/WeddingPictures/liqr4oof1kdgu9xdfrui.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786031/WeddingPictures/fo1e2mpghiibs93osnqe.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786035/WeddingPictures/ge2qdfmfluxnrgaetr4r.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786046/WeddingPictures/ctzj7biks6phgcebae63.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786043/WeddingPictures/lrmnzfwqtqyq6cj7spca.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786031/WeddingPictures/y8zjdelkuu0g4b7ky7wl.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786042/WeddingPictures/fpt7abjj4k3y6vselebn.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786040/WeddingPictures/bljjb3uxx3pfjvsddlkg.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786047/WeddingPictures/jnbjntcr0szjoisevoti.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786039/WeddingPictures/hobqfsp43t3ac7tazhc5.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786033/WeddingPictures/ivzvhariodkhlvequuxr.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786030/WeddingPictures/qfhwmny6geccmx24jgqt.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786045/WeddingPictures/ku2mxt8w1qj0wshadtz7.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786038/WeddingPictures/xda67busfhb40zavwkwv.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786049/WeddingPictures/skz5uvq0dfwavmbhnqkx.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786045/WeddingPictures/ncyongfud95h7ebjw6gj.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786032/WeddingPictures/ld1jrdrlkgpl6vtlp1sk.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786049/WeddingPictures/sogqti7ekdz94sr5vf15.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786041/WeddingPictures/la7hybttr83wxbyzamvp.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786035/WeddingPictures/d7t5w7mtfdjfetocvkvy.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786047/WeddingPictures/xkk8uwrfbzermajx5jyz.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786043/WeddingPictures/cbqxywt0fpimxkzaudd2.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786040/WeddingPictures/seobfyz0qx5ktzighbqm.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786051/WeddingPictures/gtj6nlkqcqqvsnlm7i3d.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786048/WeddingPictures/vvuv05wzxubgbdiuye0k.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786032/WeddingPictures/m9iykpspwt42hduawlvb.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786052/WeddingPictures/kn9ofat1nhyhtsacacvo.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786050/WeddingPictures/lr7lru8ebqixhwltwe24.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786042/WeddingPictures/e0c5ib3axceizyiy35oz.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786033/WeddingPictures/vlrfd6krab8noxxh4zxh.jpg",
    "https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786032/WeddingPictures/v1hpnx1z0j8tglsye0af.jpg",
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Touch handling
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTouchStart(null);
    }
  };

  return (
    <Background>
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="relative h-64 sm:h-64 md:h-[50vh] lg:h-[70vh] xl:h-[90vh] overflow-hidden rounded-lg">
          {/* Current Image */}
          <div
            className={`absolute w-full h-full transform transition-transform duration-500 ease-in-out ${
              isTransitioning ? "scale-95 opacity-90" : "scale-100 opacity-100"
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <img
              src={images[currentIndex]}
              className="absolute block w-full h-full object-contain"
              alt={`Slide ${currentIndex + 1}`}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 mx-4 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 mx-4 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </Background>
  );
}
