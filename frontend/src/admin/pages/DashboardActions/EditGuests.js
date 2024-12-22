import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import api_url from "../../../config/api_url";

export default function EditGuests({
  isEditModalOpen,
  setIsEditModalOpen,
  fetchGuests,
  editSelectedGuest,
  setEditSelectedGuest,
}) {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [reservedSeats, setReservedSeats] = useState(1); // New state for Reserved Seats

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setAdminEmail(parsedData.email || "");
        setAdminPassword(parsedData.password || "");
      } catch (error) {
        console.error("Error parsing userData:", error);
      }
    }
  }, []);
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    // Show loading indicator
    Swal.fire({
      title: "Updating...",
      text: "Please wait while we update the guest info.",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await api_url.put("editGuests", {
        id: editSelectedGuest.id,
        guestName: editSelectedGuest.guestName,
        status: editSelectedGuest.status,
        additionalGuests: editSelectedGuest.additionalGuests,
        emailAdmin: adminEmail, // Use the actual admin email
        passwordAdmin: adminPassword, // Use the actual admin password
      });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: response.data.message,
        background: "#fff",
        color: "#000",
        confirmButtonColor: "#000",
        confirmButtonText: "Okay",
      });

      // Close the modal and refresh the guests list
      setIsEditModalOpen(false);
      fetchGuests(); // Refresh the guests list
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: error.response
          ? error.response.data.message
          : "An unexpected error occurred.",
        icon: "error",
        confirmButtonText: "Try Again",
        background: "#000",
        color: "#fff",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gray-900 bg-opacity-50">
      <div className="relative w-full max-w-md mx-auto">
        <div className="relative bg-white rounded-lg shadow">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">Edit Guest</h3>
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal body */}
          <form onSubmit={handleEditSubmit} className="p-6 space-y-6">
            <div className="flex-col">
              <div className="flex gap-3">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                  placeholder="Guest Name"
                  value={editSelectedGuest.guestName}
                  onChange={(e) =>
                    setEditSelectedGuest({
                      ...editSelectedGuest,
                      guestName: e.target.value,
                    })
                  }
                />
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                  value={editSelectedGuest.status}
                  onChange={(e) =>
                    setEditSelectedGuest({
                      ...editSelectedGuest,
                      status: e.target.value,
                    })
                  }
                >
                  <option value={1}>Confirmed</option>
                  <option value={3}>Decline</option>
                  <option value={2}>Pending</option>
                </select>
              </div>
              <div className="mt-3">
                <h1 className="text-black font-semibold mb-2">
                  Reserved Seat(s):{" "}
                </h1>
                <input
                  type="number"
                  min="1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                  placeholder="Reserved Seats"
                  value={editSelectedGuest.additionalGuests}
                  onChange={(e) =>
                    setEditSelectedGuest({
                      ...editSelectedGuest,
                      additionalGuests: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-black hover:bg-gray-800 focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Update Guest Info
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
