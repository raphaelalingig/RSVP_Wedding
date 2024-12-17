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
  const [guestTokenFound, setGuestTokenFound] = useState(null);

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
          setGuestLists(guests);
          console.log("Guest Lists:", guests);

          // Check if the token matches any guest's token
          const guest = guests.find((guest) => guest.token === token);
          if (guest) {
            console.log("Guest Token Found from firstsection:", guest); // log here
            setGuestTokenFound(guest);
          }
        }
      } catch (error) {
        console.error("Error fetching guests:", error);
        setGuestLists([]); // Or handle the error appropriately
      }
    };

    // Fetch guests when the component mounts
    fetchGuests();
  }, [token]); // Run the effect again if the token changes

  useEffect(() => {
    if (guestTokenFound) {
      console.log("Guest Token Found from firstsection:", guestTokenFound);
    }
  }, [guestTokenFound]);

  return (
    <div>
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center p-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen gap-8">
          {/* Left image with border */}
          <div data-aos="fade-right" className="w-1/2 md:w-1/2 px-4">
            <img
              src="https://img.freepik.com/free-photo/front-view-happy-bride-groom-holding-together-knife-concentrating-cutting-wedding-cake-while-standing-background_8353-11868.jpg?t=st=1734287918~exp=1734291518~hmac=e7b14e0d6fb5abadef8adc209454ffa14ce3b54fc442fcb8b5ed68cad37a2375&w=826"
              alt="Image"
              className="w-full max-w-lg mx-auto rounded-lg transform transition duration-300 hover:scale-105 object-cover"
            />
          </div>

          {/* Main content */}
          <div
            data-aos="zoom-in-down"
            className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6 px-4 sm:mb-12 mr-5"
          >
            <h1 className="font-aniyah text-4xl md:text-7xl text-white">
              Ronald
              <span className="font-serif text-xl sm:text-2xl block">
                Dañas
              </span>
            </h1>
            <div className="text-xl sm:text-2xl text-white italic">and</div>
            <div>
              <h1 className="font-aniyah text-4xl md:text-7xl text-white">
                Leahlaine
                <span className="mt-3 font-serif text-xl sm:text-2xl block">
                  Layzon
                </span>
              </h1>
            </div>
            <div className="space-y-4">
              <h1 className="font-serif text-lg sm:text-xl text-white">
                JOIN US FOR OUR SPECIAL WEDDING DAY ON
              </h1>
              <h1 className="font-serif text-lg sm:text-xl text-white">
                MONDAY 20TH JANUARY, 2025
              </h1>
              <h1 className="font-serif text-lg sm:text-xl text-white">
                CEREMONY WILL START AT 3:00 P.M. SAN GUILLERMO DE MALEVAL PARISH
                IPONAN, CAGAYAN DE ORO CITY
              </h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="absolute top-0 right-0 p-4">
          <img
            onClick={handleEnvelopeClick}
            src={giftIcon}
            alt="Gift Icon"
            className="w-16 md:w-24"
          />
        </div>
        {showEnvelope && (
          <Envelope
            setShowEnvelope={setShowEnvelope}
            showEnvelope={showEnvelope}
            guestTokenFound={guestTokenFound}
          />
        )}
      </div>
    </div>
  );
}
