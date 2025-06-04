import React, { useState } from "react";
import { FaRegPenToSquare, FaWhatsapp, FaHammer } from "react-icons/fa6";
import BrickIntro from "../../Components/PopUp/BrickIntro";
import Enquiry from "../PopUp/Enquiry";
import PlaceBid from "../PopUp/PlaceBid";
import { BsBagHeartFill, BsBagHeart } from "react-icons/bs";
import useWishListStore from "../../Zustand/store";


export default function ProductCard({ image, name, price, type, color, size, minimumOrder, shape }) {
    const [showModal, setShowModal] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false)
    const [showBid, setShowBid] = useState(false)
    const [wish, setWish] = useState(false)
    const { wishlist, toggleWishList } = useWishListStore()
    const item = { image, name, price, type, color, size, minimumOrder, shape }
    const isWished = wishlist.some((i) => i.name === name)

    const handleWhatsapp = () => {
        window.open("https://wa.me/7889276476", "_blank")
    }

    return (
        <div className="w-full max-w-xs bg-[var(--var-red-col)]/10 shadow-xl rounded-2xl overflow-hidden flex flex-col  hover:shadow-2xl transition-all duration-300">
            <BrickIntro isOpen={showModal} onClose={() => setShowModal(false)} item={item}
                size={item.size}
                shape={item.shape}
                color={item.color}
                supplycapacity={item.supplycapacity}
                miniorder={item.minimumOrder}

            />
            <Enquiry isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} item={item} />
            <PlaceBid isOpen={showBid} onClose={() => setShowBid(false)} item={item} />
            {/* Image section */}
            <div
                className="relative h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => setShowModal(true)}
            >


                <span className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/80 to-transparent text-center text-sm font-semibold py-2 text-gray-900">
                    {name}
                    {/* – ₹{price.toFixed(2)} */}
                </span>
            </div>

            {/* Button section */}
            <div className="flex flex-col gap-3 px-4 py-4">
                <button
                    onClick={() => setShowBid(true)}
                    className="flex items-center cursor-pointer justify-center gap-2 py-2 px-4 bg-[var(--var-red-col)] text-white font-medium text-sm rounded-lg hover:bg-[var(--var-red-col)]/90 transition-all">
                    <FaHammer /> Place a Bid
                </button>

                <div className="flex gap-2">
                    <button
                        onClick={() => setShowEnquiry(true)}
                        className="flex cursor-pointer items-center justify-center gap-1 py-2 px-4 flex-1 bg-gray-100 text-sm text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all">
                        <FaRegPenToSquare /> Enquiry
                    </button>
                    <button
                        className="wishlist-button cursor-pointer flex items-center justify-center "
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleWishList(item);
                        }}
                        title={isWished ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                        {isWished ? (
                            <img src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1748235866/selected_wishlist-removebg-preview_ig2ryt.png" alt="added_to_wishlisy" className="w-14 h-8" />
                            // <BsBagHeartFill className="text-[var(--var-red-col)] transition-transform duration-300 group-hover:scale-110" size={12} />
                        ) : (
                            <img src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1748235644/unselected_wishlits-removebg-preview_f1hc3j.png" alt="not_added_wishlist" className="w-14 h-8" />
                            // <BsBagHeart className="text-[var(--var-red-col)] transition-transform duration-300 group-hover:scale-110" size={22} />
                        )}
                    </button>

                    <button
                        onClick={() => handleWhatsapp()}
                        className="flex cursor-pointer items-center justify-center gap-1 py-1 px-1 flex-1 bg-gray-100 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-green-200 transition-all">
                        <FaWhatsapp />
                    </button>
                </div>
            </div>
        </div>
    );
}
