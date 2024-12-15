import React, { useState, useEffect } from "react";

const Countdown = () => {
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

  return (
    <div className="p-6 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold mb-4 text-black">
        Countdown to January 20, 2025 (PH Time)
      </h3>
      <div className="h-64 text-2xl text-white flex items-center justify-center">
        <span className="bg-[#000000] p-4 rounded-md shadow-md">
          {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{" "}
          {timeLeft.seconds} seconds
        </span>
      </div>
    </div>
  );
};

export default Countdown;
