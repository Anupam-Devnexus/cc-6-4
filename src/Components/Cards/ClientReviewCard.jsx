import React from "react";
import { FaStar } from "react-icons/fa";

export default function ClientReviewCard({ clientname, profilePicture, star, reviewHead, review }) {
    return (
        <article
            className="flex flex-col rounded-md bg-[var(--var-red-col)] h-72 p-4 shadow-lg"
            aria-label={`Review by ${clientname}`}
        >
            <header className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <img
                        src={profilePicture}
                        alt={`Profile picture of ${clientname}`}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">{clientname}</span>
                </div>
                <div
                    className="flex items-center text-amber-400"
                    aria-label={`${star} out of 5 star rating`}
                >
                    {[...Array(star)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
            </header>

            <section className="text-center mt-10 space-y-2 overflow-hidden">
                <h2 className="text-white text-lg font-bold line-clamp-2">{reviewHead}</h2>
                <p className="text-white text-sm line-clamp-4">{review}</p>
            </section>
        </article>
    );
}
