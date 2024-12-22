import React, { useState, useRef } from "react";
import { Music, Pause, Play } from "lucide-react";

const SoundPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/90 transition-all duration-300">
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-200 transition-colors duration-300"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-black" />
            ) : (
              <Play className="w-5 h-5 text-black" />
            )}
          </button>
          <Music className="w-5 h-5 text-black" />
        </div>
        <audio
          ref={audioRef}
          src="https://res.cloudinary.com/dlu8gmxsn/video/upload/v1734834143/WeddingPictures/lzzaohd7ijznb820ifcq.mp3"
          loop
        />
      </div>
    </div>
  );
};

export default SoundPlayer;
