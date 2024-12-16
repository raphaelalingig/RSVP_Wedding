import React, { useState } from "react";
import opening from "../../../assets/envelope/openning.mp4";

export default function Envelope({ setShowEnvelope }) {
  const [showRSVPForm, setShowRSVPForm] = useState(false);
  const [rsvpChoice, setRsvpChoice] = useState("");
  const [respondentName, setRespondentName] = useState(""); // State for the respondent's name

  // Handle click outside the envelope container
  const handleClose = (e) => {
    if (e.target.id === "overlay") {
      setShowEnvelope(false);
    }
  };

  // Handle video end and show RSVP form
  const handleVideoEnd = () => {
    setShowRSVPForm(true);
  };

  // Handle RSVP form submit
  const handleSubmit = () => {
    if (rsvpChoice && respondentName) {
      alert(`RSVP Submitted: ${rsvpChoice}\nRespondent: ${respondentName}`);
      setShowRSVPForm(false); // Close the RSVP form after submission
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleCloseRsvpForm = () => {
    setShowRSVPForm(false);
    setShowEnvelope(false);
  };

  return (
    <div
      id="overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClose}
    >
      <div className="h-72 w-auto flex justify-center items-center bg-white rounded-lg p-4 shadow-lg">
        <video
          src={opening}
          autoPlay
          className="h-full w-auto rounded-md"
          onEnded={handleVideoEnd} // Trigger when video ends
        ></video>
      </div>

      {/* RSVP Form Modal */}
      {showRSVPForm && (
        <div
          id="rsvp-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="w-96 bg-white rounded-lg p-8 space-y-4 shadow-lg">
            <h2 className="text-2xl text-center font-serif">RSVP</h2>
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="respondent-name" className="block text-lg">
                  Name of Respondent:
                </label>
                <input
                  type="text"
                  id="respondent-name"
                  value={respondentName}
                  onChange={(e) => setRespondentName(e.target.value)}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>

              {/* RSVP Choices */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="accepts"
                    name="rsvp"
                    value="Accepts with Pleasure"
                    checked={rsvpChoice === "Accepts with Pleasure"}
                    onChange={() => setRsvpChoice("Accepts with Pleasure")}
                  />
                  <label htmlFor="accepts" className="ml-2 text-lg">
                    Accepts with Pleasure
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="declines"
                    name="rsvp"
                    value="Declines with Regret"
                    checked={rsvpChoice === "Declines with Regret"}
                    onChange={() => setRsvpChoice("Declines with Regret")}
                  />
                  <label htmlFor="declines" className="ml-2 text-lg">
                    Declines with Regret
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleCloseRsvpForm()}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                disabled={!rsvpChoice || !respondentName} // Disable submit if fields are empty
                className="px-4 py-2 bg-black text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
