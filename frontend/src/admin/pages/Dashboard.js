import React, { useEffect, useState } from "react";
import AdminNavbar from "../hooks/AdminNavbar";
import AddGuests from "./DashboardActions/AddGuests";
import AnalyticsCharts from "./AnalyticsCharts";
import api_url from "../../config/api_url";
import EditGuests from "./DashboardActions/EditGuests";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [guestLists, setGuestLists] = useState([]);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [editSelectedGuest, setEditSelectedGuest] = useState({
    id: null,
    guestName: "",
    status: 0,
  });

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

  useEffect(() => {
    if (adminEmail && adminPassword) {
      fetchGuests();
    }
  }, [adminEmail, adminPassword]);

  const fetchGuests = async () => {
    try {
      const response = await api_url.post("showGuests", {
        emailAdmin: adminEmail,
        passwordAdmin: adminPassword,
      });

      if (response.status === 200) {
        setGuestLists(response.data.Data || []);
      }
    } catch (error) {
      console.error("Error fetching guests:", error);
      setGuestLists([]);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      2: { label: "Pending", class: "bg-yellow-100 text-yellow-800" },
      1: { label: "Confirmed", class: "bg-green-100 text-green-800" },
      3: { label: "Declined", class: "bg-red-100 text-red-800" },
    };

    const config = statusConfig[status] || {
      label: "Unknown",
      class: "bg-gray-100 text-gray-800",
    };
    return (
      <span
        className={`${config.class} text-xs font-medium px-2.5 py-0.5 rounded`}
      >
        {config.label}
      </span>
    );
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here using Flowbite's Toast component
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleEditClick = (id, guestName, status) => {
    setIsEditModalOpen(true);
    setEditSelectedGuest({ id, guestName, status });
  };

  const handleDeleteClick = async (id, guestName) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: `Are you sure you want to delete ${guestName}?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#d33",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    // If user confirmed, delete the guest
    if (result.isConfirmed) {
      try {
        await api_url.delete("deleteGuests", {
          data: {
            id,
            emailAdmin: adminEmail,
            passwordAdmin: adminPassword,
          },
        });

        // Refresh the guest list after successful deletion
        fetchGuests();

        // Show success message
        Swal.fire("Deleted!", `${guestName} has been deleted.`, "success");
      } catch (error) {
        console.error("Error deleting guest:", error);
        Swal.fire("Error!", "There was an issue deleting the guest.", "error");
      }
    } else {
      // If canceled, show cancellation message
      Swal.fire("Cancelled", "The guest was not deleted.", "error");
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <AdminNavbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <AnalyticsCharts guestLists={guestLists} />

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Guest List</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            class="flex gap-2 items-center text-white bg-black hover:bg-[#555555 ] focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              class="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <h1 className="text-sm">Add Guest</h1>
          </button>
        </div>

        {isModalOpen && (
          <AddGuests
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            fetchGuests={fetchGuests}
          />
        )}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-12">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Guest Name
                </th>
                <th scope="col" className="px-6 py-3">
                  RSVP Link
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {guestLists.map((guest) => (
                <tr
                  key={guest.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {guest.guestName}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="truncate max-w-xs">
                        {`https://rsvp.com/invitation/${guest.token}`}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            `https://rsvp.com/guest/${guest.token}`
                          )
                        }
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(guest.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          handleEditClick(
                            guest.id,
                            guest.guestName,
                            guest.status
                          )
                        }
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteClick(guest.id, guest.guestName)
                        }
                        className="font-medium text-red-600 hover:text-red-800"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isEditModalOpen && (
            <EditGuests
              isEditModalOpen={isEditModalOpen}
              setIsEditModalOpen={setIsEditModalOpen}
              fetchGuests={fetchGuests}
              editSelectedGuest={editSelectedGuest}
              setEditSelectedGuest={setEditSelectedGuest}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
