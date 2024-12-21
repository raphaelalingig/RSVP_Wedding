import React, { useEffect, useState } from "react";
import Background from "../Background";
import giftIcon from "../../assets/icons/envelope-icon.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import Envelope from "./Actions/Envelope";
import api_url from "../../../config/api_url";
import { useParams } from "react-router-dom";

export default function FirstSection() {
  AOS.init();

  const [showEnvelope, setShowEnvelope] = useState(false);
  const [guestLists, setGuestLists] = useState([]);
  const [guestTokenFound, setGuestTokenFound] = useState("");

  const { token } = useParams();

  // useEffect(() => {
  //   if (token) {

  //   }
  // }, [token]);

  useEffect(() => {
    if (showEnvelope) {
      // Disable scrolling when showEnvelope is true
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when showEnvelope is false
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component unmounts or when showEnvelope changes
    return () => {
      document.body.style.overflow = "auto"; // Reset overflow style on cleanup
    };
  }, [showEnvelope]);

  const handleEnvelopeClick = () => {
    setShowEnvelope(true);
  };

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await api_url.get("showGuests");

        if (response.status === 200) {
          const guests = response.data.Data;
          console.log("Guests fetched:", guests);
          console.log("Current token from URL:", token); // Log the token from URL

          setGuestLists(guests);

          if (token) {
            // Add more detailed logging
            guests.forEach((guest) => {
              console.log(`Comparing token ${guest.token} with ${token}`);
              console.log(`Match?: ${guest.token === token}`);
            });

            const foundGuest = guests.find((guest) => guest.token === token);
            console.log("Found guest:", foundGuest);
            setGuestTokenFound(foundGuest || null);
          }
        }
      } catch (error) {
        console.error("Error fetching guests:", error);
        setGuestLists([]);
      }
    };

    fetchGuests();
  }, [token]);

  useEffect(() => {
    console.log("Guest Token Found from firstsection:", guestTokenFound);
  }, [guestTokenFound]);

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen text-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen gap-8">
        {/* Left image with border */}
        <div data-aos="fade-right" className="w-full md:w-1/2 px-4">
          <h1 className="font-serif text-md sm:text-xl text-white mb-4">
            JOIN US FOR OUR SPECIAL WEDDING DAY
          </h1>
          <img
            src="https://res.cloudinary.com/dlu8gmxsn/image/upload/v1734786030/WeddingPictures/qfhwmny6geccmx24jgqt.jpg"
            alt="Image"
            className="w-full min-w-md max-w-lg mx-auto rounded-lg transform transition duration-300 hover:scale-105 object-cover"
          />
        </div>

        {/* Main content */}
        <div
          data-aos="zoom-in-down"
          className="flex flex-col sm:flex-col items-center justify-center w-full md:w-1/2 space-y-6 px-4 sm:mb-12 mr-5"
        >
          <div className="flex flex-row sm:flex-col items-center">
            <h1 className="font-aniyah text-2xl md:text-7xl text-white">
              Ronald
              <span className="font-serif text-xl sm:text-2xl block">
                Dañas
              </span>
            </h1>
            <div className="text-xl sm:text-2xl text-white px-3 italic">
              and
            </div>
            <div>
              <h1 className="font-aniyah text-2xl md:text-7xl text-white">
                Leah
                <span className="sm:mt-3 font-serif text-xl sm:text-2xl block">
                  Layson
                </span>
              </h1>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-serif text-sm sm:text-xl text-white">
              MONDAY 20TH of JANUARY, 2025
            </h1>
            <h1 className="font-serif text-sm sm:text-xl text-white">
              Ceremony will start AT 3:00 P.M.
            </h1>
            <h1 className="font-serif text-sm sm:text-xl text-white">
              San Guillermo de Maleval Parish Iponan, <br />
              Cagayan de Oro City
            </h1>
          </div>
        </div>
      </div>

      {token && (
        <div data-aos="fade-left" className="absolute top-0 right-0 p-4">
          <img
            onClick={handleEnvelopeClick}
            src={giftIcon}
            alt="Gift Icon"
            className="w-16 md:w-24"
          />
        </div>
      )}

      {showEnvelope && (
        <Envelope
          setShowEnvelope={setShowEnvelope}
          showEnvelope={showEnvelope}
          guestTokenFound={guestTokenFound}
        />
      )}
    </div>
  );
}
