import React, { useState } from "react";
import opening from "../../../assets/envelope/openning.mp4";
import api_url from "../../../../config/api_url";
import Swal from "sweetalert2";

export default function Envelope({ setShowEnvelope, guestTokenFound }) {
  const [showRSVPForm, setShowRSVPForm] = useState(false);
  const [rsvpChoice, setRsvpChoice] = useState("");
  const [respondentName, setRespondentName] = useState("");
  const [reasons, setReasons] = useState("");

  const handleClose = (e) => {
    if (e.target.id === "overlay") {
      setShowEnvelope(false);
    }
  };

  const handleVideoEnd = () => {
    setShowRSVPForm(true);
  };

  const handleOpenRsvpForm = () => {
    setShowRSVPForm(true);
  };

  const handleSubmit = async () => {
    try {
      if (!guestTokenFound.token || !rsvpChoice) {
        alert("Please select an RSVP option");
        return;
      }

      const result = await Swal.fire({
        title: "Are you sure?",
        text: `You are about to submit your RSVP as "${rsvpChoice}"`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, submit!",
        confirmButtonColor: "#000000",
        cancelButtonText: "Cancel",
        cancelButtonColor: "#d33",
      });

      if (result.isConfirmed) {
        const status = rsvpChoice === "Accepts with Pleasure" ? 1 : 3;

        const response = await api_url.post("editGuests", {
          token: guestTokenFound.token,
          status: status,
          reasons: reasons || null, // Include reasons if provided
        });

        if (response.status === 200) {
          Swal.fire({
            title: "RSVP submitted successfully!",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#000000",
          });
          handleCloseRsvpForm();
        }
      }
    } catch (error) {
      console.error("RSVP Submission Error:", error);

      if (error.response) {
        Swal.fire({
          title: "Error!",
          text: `Error: ${error.response.data.message}`,
          icon: "error",
        });
      } else if (error.request) {
        Swal.fire({
          title: "Error!",
          text: "No response received from the server",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while submitting your RSVP",
          icon: "error",
        });
      }
    }
  };

  const handleCloseRsvpForm = () => {
    setShowRSVPForm(false);
    setShowEnvelope(false);
  };

  return (
    <div
      id="overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      onClick={handleClose}
    >
      {/* RSVP Form Modal */}
      <div
        id="rsvp-modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      >
        <div className="w-full max-w-sm bg-white rounded-lg p-6 space-y-4 shadow-lg mx-4">
          <h2 className="text-xl sm:text-2xl text-center font-serif">RSVP</h2>
          <p className="text-center text-black italic text-sm sm:text-base">
            "Kindly let us know your presence to celebrate this joyous
            occasion."
          </p>
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="respondent-name"
                className="block text-base font-bold sm:text-md"
              >
                Name of Respondent:{" "}
              </label>

              <input
                type="text"
                id="respondent-name"
                value={guestTokenFound.guestName || "No Guest Name Found"}
                className="mt-2 w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg"
                disabled
              />
              <span className="flex justify-center text-base font-bold sm:text-md">
                We have reserved {guestTokenFound.additionalGuests} seat(s) for
                you
              </span>
            </div>

            {/* RSVP Choices */}
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="accepts"
                  name="rsvp"
                  value="Accepts with Pleasure"
                  checked={rsvpChoice === "Accepts with Pleasure"}
                  onChange={() => {
                    setRsvpChoice("Accepts with Pleasure");
                    setReasons(""); // Clear reasons when selecting Accepts
                  }}
                  className="w-4 h-4"
                />
                <label htmlFor="accepts" className="ml-2 text-base sm:text-lg">
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
                  className="w-4 h-4"
                />
                <label htmlFor="declines" className="ml-2 text-base sm:text-lg">
                  Declines with Regret
                </label>
              </div>
            </div>

            {/* Reason Input */}
            {rsvpChoice === "Accepts with Pleasure" && (
              <div>
                <label htmlFor="reasons" className="block text-base sm:text-md">
                  Note (Optional):
                </label>
                <textarea
                  id="reasons"
                  value={reasons}
                  onChange={(e) => setReasons(e.target.value)}
                  placeholder="Please specify your reason (optional)"
                  className="mt-2 w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg"
                />
              </div>
            )}

            {rsvpChoice === "Declines with Regret" && (
              <div>
                <label htmlFor="reasons" className="block text-base sm:text-md">
                  Reasons (Optional):
                </label>
                <textarea
                  id="reasons"
                  value={reasons}
                  onChange={(e) => setReasons(e.target.value)}
                  placeholder="Please specify your reason (optional)"
                  className="mt-2 w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="flex justify-between gap-4">
            <button
              onClick={() => handleCloseRsvpForm()}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm sm:text-base flex-1"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-black text-white rounded-lg text-sm sm:text-base flex-1"
            >
              Submit
            </button>
          </div>
          <div>
            <p className="text-center text-black text-xs sm:text-sm mt-4">
              "Your response means the world to us. Thank you for making our day
              special!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
