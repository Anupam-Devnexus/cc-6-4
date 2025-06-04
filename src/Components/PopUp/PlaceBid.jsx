import React, { useEffect, useState } from "react";
import { FaHammer } from "react-icons/fa6";

export default function PlaceBid({ isOpen, onClose, item }) {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          setCurrencies(Object.keys(data.rates));
        }
      })
      .catch((error) => {
        console.error("Currency fetch error:", error);
        setCurrencies(["USD", "EUR", "INR"]); // fallback
      });
  }, []);

  if (!isOpen) return null;

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const bidAmount = formData.get("bidAmount");
  const currency = formData.get("currency");
  const quantity = formData.get("quantity");

  const payload = {
    bidAmount: Number(bidAmount),
    currency,
    quantity: Number(quantity),
    item: item?.name || "N/A",
    itemId: item?.id || null, 
  };

  try {
    const response = await fetch("https://cervino-ceramix-backend-production.up.railway.app/api/bid-place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to submit bid");
    }

    const result = await response.json();
    console.log("Bid submitted successfully:", result);

    alert("Your bid has been submitted successfully!");
    onClose && onClose();
  } catch (error) {
    console.error("Bid submission error:", error);
    alert("Something went wrong while submitting your bid.");
  }
};


  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="place-bid-title"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Title */}
        <header className="relative mb-6 text-left">
          <h2
            id="place-bid-title"
            className="text-xl font-bold text-[var(--var-red-col)]"
          >
            Place Your Bid{item?.name ? ` - ${item.name}` : ""}
          </h2>
          <button
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 p-1 px-2 text-gray-500 hover:text-[var(--var-red-col)] transition rounded-full border"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </header>

        {/* Bid Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-gray-700">
          {/* Bid Amount */}
          <div>
            <label htmlFor="bidAmount" className="block font-medium mb-1">
              Bid Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="bidAmount"
              name="bidAmount"
              placeholder="Enter bid amount per brick"
              min={0}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
            />
          </div>

          {/* Currency Selection */}
          <div>
            <label htmlFor="currency" className="block font-medium mb-1">
              Currency <span className="text-red-500">*</span>
            </label>
            <select
              id="currency"
              name="currency"
              defaultValue=""
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
            >
              <option value="" disabled>
                Choose a currency
              </option>
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          {/* Minimum Quantity */}
          <div>
            <label htmlFor="quantity" className="block font-medium mb-1">
              Minimum Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Minimum order quantity (e.g. 1000)"
              min={1000}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 border border-gray-300 px-4 py-2 rounded-md font-medium hover:text-[var(--var-red-col)] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[var(--var-red-col)] text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition"
            >
              <FaHammer />
              Submit Bid
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
