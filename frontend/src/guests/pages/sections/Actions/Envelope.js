import React, { useState } from "react";
import opening from "../../../assets/envelope/openning.mp4";
import api_url from "../../../../config/api_url";
import Swal from "sweetalert2";

export default function Envelope({ setShowEnvelope, guestTokenFound }) {
  const [showRSVPForm, setShowRSVPForm] = useState(false);
  const [rsvpChoice, setRsvpChoice] = useState("");
  const [respondentName, setRespondentName] = useState(""); // State for the respondent's name

  console.log("Guest Token Found:", guestTokenFound);

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
  const handleSubmit = async () => {
    try {
      // Ensure we have a token and have selected an RSVP choice
      if (!guestTokenFound.token || !rsvpChoice) {
        alert("Please select an RSVP option");
        return;
      }

      // Show SweetAlert confirmation
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

      // If the user confirms the action
      if (result.isConfirmed) {
        // Determine the status based on the RSVP choice
        const status = rsvpChoice === "Accepts with Pleasure" ? 1 : 3;

        // Make the API call to update the guest's RSVP status using Axios
        const response = await api_url.post("editGuests", {
          token: guestTokenFound.token,
          status: status,
        });

        if (response.status === 200) {
          // Handle successful RSVP submission
          Swal.fire({
            title: "RSVP submitted successfully!",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#000000",
          });
          handleCloseRsvpForm(); // Close the form
        }
      }
    } catch (error) {
      // Handle error cases
      console.error("RSVP Submission Error:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        Swal.fire({
          title: "Error!",
          text: `Error: ${error.response.data.message}`,
          icon: "error",
        });
      } else if (error.request) {
        // The request was made but no response was received
        Swal.fire({
          title: "Error!",
          text: "No response received from the server",
          icon: "error",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
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
            <p className="text-center text-black italic">
              "Kindly let us know your presence to celebrate this joyous
              occasion."
            </p>
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="respondent-name" className="block text-lg">
                  Name of Respondent:
                </label>
                <input
                  type="text"
                  id="respondent-name"
                  value={guestTokenFound.guestName}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg"
                  disabled
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
                className="px-4 py-2 bg-black text-white rounded-lg"
              >
                Submit
              </button>
            </div>
            <div>
              <p className="text-center text-black text-sm mt-4">
                "Your response means the world to us. Thank you for making our
                day special!"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
