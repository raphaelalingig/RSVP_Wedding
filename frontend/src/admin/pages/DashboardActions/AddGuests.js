import React from "react";

export default function AddGuests({
  isModalOpen,
  setIsModalOpen,
  guestName,
  setGuestName,
  handleAddGuestSubmit,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gray-900 bg-opacity-50">
      <div className="relative w-full max-w-md mx-auto">
        <div className="relative bg-white rounded-lg shadow">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              Add New Guest
            </h3>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
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
          <form onSubmit={handleAddGuestSubmit} className="p-6 space-y-6">
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                placeholder="Guest Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-black hover:bg-gray-800 focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Generate Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
