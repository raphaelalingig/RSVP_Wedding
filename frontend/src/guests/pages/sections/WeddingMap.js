import React from "react";
import { Map } from "lucide-react";
import Background from "../Background";

const WeddingMap = () => {
  const venues = [
    {
      name: "San Guillermo de Maleval Parish",
      address: "San Guillermo de Maleval Parish Iponan, Cagayan de Oro City",
      mapLink: "https://maps.app.goo.gl/t7dV4G1Y8Cwbc5C39",
    },
    {
      name: "Somewhere by Casa de Canitoan",
      address: "Casa de Canitoan, Cagayan de Oro City",
      mapLink: "https://maps.app.goo.gl/ZoB72NyizdxBBjm86",
    },
  ];

  return (
    <Background>
      <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto p-4">
        <h1 className="text-4xl font-serif italic text-center mb-8 text-white">
          Venue Locations
        </h1>
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="space-y-4">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-bold mb-2">{venue.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{venue.address}</p>
                <div>
                  <a
                    href={venue.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <Map className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Background>
  );
};

export default WeddingMap;
