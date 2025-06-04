import React from "react";

export default function Enquiry({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  // Placeholder submit handler, replace with your function
 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const quantity = formData.get("quantity");
  const message = formData.get("message");

  const payload = {
    name,
    phone,
    quantity: Number(quantity),
    message,
    item: item?.name || "N/A",
    itemId: item?.id || null, // if available
  };

  try {
    const response = await fetch("https://cervino-ceramix-backend-production.up.railway.app/api/enquiry ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to submit enquiry");
    }

    const result = await response.json();
    console.log("Enquiry submitted successfully:", result);

    alert("Your enquiry has been submitted successfully!");
    onClose && onClose();
  } catch (error) {
    console.error("Enquiry submission error:", error);
    alert("Something went wrong while submitting your enquiry.");
  }
};


  return (
    <div
      className="fixed inset-0 z-60 bg-black/10 bg-opacity-70 flex items-center justify-center px-4 "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}


        {/* Modal Title */}
        <div className="flex items-center justify-between w-full mb-6">
          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-700">
            Enquiry of <span className="font-bold text-[var(--var-red-col)]"> {item?.name} </span>
          </h2>

          {/* Close Button */}
          <button
            className="py-1 px-2 cursor-pointer border border-gray-300 rounded-full hover:bg-gray-100 hover:text-[var(--var-red-col)] transition-all duration-300"
            onClick={onClose} // Replace with your actual close function
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Enquiry Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-gray-700">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity" className="mb-1 font-semibold">
              Minimum Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Quantity minimum 1000"
              min={1000}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={4}
              className="border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
            />
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="px-6 py-3 cursor-pointer bg-gray-200 text-gray-700 rounded-md font-semibold hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-[var(--var-red-col)] text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
