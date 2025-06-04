import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";

export default function BlogCard({ image, title, desc, date }) {
    const words = desc.trim().split(/\s+/);
    const [visibleWords, setVisibleWords] = useState(50);
    const hasMore = visibleWords < words.length;

    const handleContinueReading = () => {
        setVisibleWords(prev => Math.min(prev + 50, words.length));
    };

    return (
        <div className="flex cursor-pointer flex-col border-2 border-[var(--var-red-col)]/50 bg-white shadow-lg hover:shadow-2xl  rounded-md w-full overflow-hidden">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="h-32 w-full p-2 rounded-t-2xl object-cover"
            />

            {/* Content and Date container */}
            <div className="flex flex-col justify-between flex-grow">
                {/* Content */}
                <div className="flex flex-col gap-2 text-left p-2 text-sm">
                    <b className="text-base">{title}</b>
                    <p className="text-gray-600">
                        {words.slice(0, visibleWords).join(" ")}{hasMore && "..."}
                    </p>
                    {hasMore && (
                        <button
                            onClick={handleContinueReading}
                            className="flex items-center text-[var(--var-red-col)] font-medium gap-1 mt-auto hover:underline"
                        >
                            Continue Reading <GrLinkNext />
                        </button>
                    )}
                </div>

                {/* Date */}
                <div className="w-full rounded-md mt-3 p-2 bg-[#F6F5F5] text-left text-gray-900">
                    {date}
                </div>
            </div>
        </div>
    );
}
