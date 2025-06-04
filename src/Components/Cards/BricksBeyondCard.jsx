import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function BricksBeyondCard({ image, text, desc, path }) {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

    return (
        <article
            onClick={() => setIsClicked(!isClicked)}
            className="relative group h-52  w-full max-w-sm rounded-lg overflow-hidden shadow-md cursor-pointer"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Slide-up overlay (on hover or click) */}
            <div
                className={`
                    absolute bottom-0 left-0 right-0
                    ${isClicked ? "translate-y-0" : "translate-y-full"} 
                    group-hover:translate-y-0
                    transition-transform duration-500 ease-in-out z-20  flex-wrap bg-black
                     opacity-90 text-white p-2 
                    flex flex-col justify-center items-start h-full
                `}
            >
                <h2 className="font-bold">{text}</h2>
                <p className="text-sm mb-2">
                    {desc}
                </p>
                <button className="px-3 py-2 z-70 cursor-pointer bg-[var(--var-red-col)] text-white text-xs rounded-md mb-2" onClick={() => handleNavigate(path)}>
                    Explore
                </button>
            </div>

            {/* Fixed bottom label */}
            <div className="absolute bottom-0 w-full  text-center py-2 bg-white opacity-60"

            >
              {/* Fixed bottom label */}
            {!isClicked && (
                <div className="absolute bottom-0 w-full text-center py-2 bg-white bg-opacity-60">
                    <span className="text-[var(--var-red-col)] font-bold">{text}</span>
                </div>
            )}
            </div>
        </article>
    );
}
