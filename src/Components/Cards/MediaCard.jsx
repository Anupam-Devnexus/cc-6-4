import React from "react";

export default function MediaCard({ image, text }) {
    return (
        <div className="flex flex-col cursor-pointer items-start bg-[var(--var-red-col)]/10 border-[1px] border-[var(--var-red-col)]
     sm:items-center gap-4 p-4  rounded-lg shadow-md hover:shadow-lg transition">
            <img
                className="h-44 w-full object-cover rounded-md"
                src={image}
                alt="Industrial cutting machine"
            />
            <span className="font-light text-left text-gray-800">
                {text}
            </span>
        </div>
    );
}
