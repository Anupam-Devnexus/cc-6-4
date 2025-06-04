import React, { useState } from "react";
import { FaRegPenToSquare, FaWhatsapp } from "react-icons/fa6";
import useWishListStore from "../../Zustand/store";
import Enquiry from "../../Components/PopUp/Enquiry";
import PlaceBid from "../../Components/PopUp/PlaceBid";
import { IoHammer } from "react-icons/io5";
export default function Cart() {
  const { wishlist, removeWishList } = useWishListStore();
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPlaceBid, setShowPlaceBid] = useState(false);
  const [bidItem, setBidItem] = useState(null);

  return (
    <>
      {/* Enquiry Popup */}
      <Enquiry
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        item={selectedItem}
      />

      {/* Place Bid Popup */}
      <PlaceBid
        isOpen={showPlaceBid}
        item={bidItem}
        onClose={() => setShowPlaceBid(false)}
      />

      <div className="min-h-screen w-full bg-gray-100 p-6 mt-24">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <img
              src="https://images.pexels.com/photos/1660876/pexels-photo-1660876.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Empty Wishlist"
              className="w-full sm:w-1/2 h-auto rounded-xl shadow-lg"
            />
            <p className="mt-6 text-xl font-medium text-gray-700">
              Your wishlist is currently empty.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-[var(--var-red-col)] mb-10 text-center">
              Your Wishlist
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {wishlist.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition-transform hover:scale-[1.02] border border-gray-200 overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <span className="text-[var(--var-red-col)] font-semibold">
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setBidItem(item);
                        setShowPlaceBid(true);
                      }}
                      className="py-2 flex items-center gap-1  justify-center cursor-pointer w-full bg-[var(--var-red-col)] text-white rounded-lg font-medium hover:bg-[var(--var-red-col)] transition-all"
                    >
                      <IoHammer />  Place a Bid
                    </button>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedItem(item);
                          setShowEnquiry(true);
                        }}
                        className="flex items-center justify-center gap-2 flex-1 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-all"
                      >
                        <FaRegPenToSquare />
                        Enquiry
                      </button>

                      <button
                        onClick={() => removeWishList(item)}
                        className="flex-1 py-2 text-sm text-white bg-[var(--var-red-col)] rounded-lg hover:bg-red-600 transition-all"
                      >
                        Remove
                      </button>

                      <button
                        className="flex items-center justify-center gap-2 flex-1 py-2 text-sm text-green-700 bg-white border border-green-300 rounded-lg hover:bg-green-50 transition-all"
                      >
                        <FaWhatsapp />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
