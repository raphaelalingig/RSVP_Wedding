import React from "react";
import Background from "../Background";

export default function FifthSection() {
  const schedule = [
    { time: "3:00 PM", event: "Ceremony", icon: "🎊" },
    { time: "5:30 PM", event: "Reception", icon: "🎉" },
    { time: "6:30 PM", event: "First Dance", icon: "💑" },
    { time: "7:00 PM", event: "Dinner", icon: "🍽️" },
    { time: "8:00 PM", event: "Games & Speeches", icon: "🎤" },
    { time: "8:30 PM", event: "Cake Cutting", icon: "🎂" },
    { time: "9:00 PM", event: "Pictorials", icon: "📸" },
    { time: "9:30 PM", event: "Dancing", icon: "💃" },
  ];
  return (
    <Background>
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full text-white font-serif">
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className=" text-white max-w-md w-full mx-auto p-8 rounded-lg relative">
            {/* Decorative flower top left */}

            {/* Decorative leaves bottom right */}
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 opacity-20">
              <div className="text-6xl rotate-45">🌿</div>
            </div>

            {/* Main content */}
            <div data-aos="zoom-in" className="relative z-10">
              <h1 className="text-4xl font-aniyah text-center mb-8 text-white">
                Wedding Program
              </h1>

              <div className="space-y-4 mb-8">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 hover:bg-white/5 p-2 rounded transition-colors"
                  >
                    <span className="text-gray-300 font-light w-24">
                      {item.time}
                    </span>
                    <div className="flex-grow border-b border-dotted border-gray-700"></div>
                    <span className="flex items-center gap-2 text-gray-100">
                      <span>{item.event}</span>
                      <span className="text-lg">{item.icon}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <h2 className="font-aniyah text-xl sm:text-3xl font-dancing-script mb-2">
                  Ronald and Leah
                </h2>
                <p className="text-gray-400 tracking-widest">01.20.25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
