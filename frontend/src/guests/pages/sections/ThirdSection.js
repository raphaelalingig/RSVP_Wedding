import React from "react";
import Background from "../Background";

export default function ThirdSection() {
  return (
    <Background>
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
        <div className="mt-12 max-w-screen-md mx-auto px-4 py-8 text-center space-y-8">
          {/* Title */}
          <h1 className="font-aniyah text-4xl md:text-7xl font-extrabold italic text-white leading-tight">
            Details
          </h1>

          {/* Reception Section */}
          <div>
            <h2 className="text-yellow-300 text-lg font-bold tracking-wide uppercase">
              Reception
            </h2>
            <p className="mt-2 text-white">
              Cocktails, Dinner, & Dancing will follow after the ceremony at{" "}
              <br />
              <span className="font-medium">
                Somewhere by Casa de Canitoan
              </span>{" "}
              at exactly 5:30 PM.
            </p>
          </div>

          {/* Dress Code */}
          <div>
            <h2 className="text-yellow-300 text-lg font-bold tracking-wide uppercase">
              Dress Code
            </h2>
            <p className="mt-2 text-white">
              We would love to see you in your formal or semi-formal attire that
              suits our <br />
              <span className="font-bold text-white">
                Black Color Motif
              </span>{" "}
              (NO colored or white outfits for all our guests).
            </p>
          </div>

          {/* Children Section */}
          <div>
            <h2 className="text-yellow-300 text-lg font-bold tracking-wide uppercase">
              Children
            </h2>
            <p className="mt-2 text-white">
              While we love to watch children run and play, this is an adult
              only kind of day. <br />
              We respectfully request that <em>NO CHILDREN</em> attend the
              ceremony and reception. We thank you for your understanding.
            </p>
          </div>

          {/* RSVP Section */}
          <div>
            <h2 className="text-yellow-300 text-lg font-bold tracking-wide uppercase">RSVP</h2>
            <p className="mt-2 text-white">
              Leah:{" "}
              <a href="tel:09672534143" className="underline">
                09672534143
              </a>{" "}
              <br />
              FB Messenger: <span className="font-medium">Sakura Yuki</span>
            </p>
          </div>

          {/* Reserved Seats */}
          <div className="pt-4">
            <h2 className="text-yellow-300 font-extrabold text-xl uppercase">
              WE HAVE RESERVED <span className="underline">_____</span> SEAT(S)
              IN YOUR HONOR.
            </h2>
            <p className="mt-2 text-white">
              We appreciate your understanding as the reception will be an
              intimate gathering.
            </p>
          </div>

          {/* Hashtag */}
          <p className="text-yellow-300 text-gray-600 italic font-medium">
            #FromYesToForeverWithRonAndLeah
          </p>
        </div>
      </div>
    </Background>
  );
}
