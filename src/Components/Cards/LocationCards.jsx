import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function LocationCard({ location, image, address, email, phone }) {
    return (
        <div className="flex flex-col border border-[var(--var-red-col)] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-sm bg-white">
            <img
                src={image}
                alt={`${location} Display Center`}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-3">
                <div className="text-center">
                    <p className="text-black font-medium text-base sm:text-lg">
                        Display Center: <span className="font-bold text-[var(--var-red-col)] text-xl sm:text-2xl">{location}</span>
                    </p>

                </div>

                <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                        <FaMapMarkerAlt className="text-[var(--var-red-col)] mt-1" />
                        <span>{address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-[var(--var-red-col)]" />
                        <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-[var(--var-red-col)]" />
                        <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
