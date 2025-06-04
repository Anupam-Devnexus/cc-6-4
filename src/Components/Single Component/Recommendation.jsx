import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Recommendation({ image, text, path }) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col gap-4 border border-[var(--var-red-col)]/90 items-center w-full sm:max-w-xs bg-white rounded-lg shadow-md p-3 overflow-hidden">
      
      {/* Image section */}
      <div className="relative w-64 h-64 aspect-[1/1] rounded-md shadow-md overflow-hidden">
        <img
          src={image}
          alt={`${text} product`}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-[var(--var-red-col)]/80 text-white text-xs px-3 py-1 rounded-full capitalize shadow-md whitespace-nowrap">
            {text}
          </span>
        </div>
      </div>

      <button
        onClick={() => handleNavigate(path)}
        className="flex w-full justify-center items-center gap-2 text-white bg-[var(--var-red-col)] px-5 py-2 rounded-md hover:bg-red-700 transition-colors shadow-md"
        aria-label={`Explore ${text} product`}
      >
        Explore <FaExternalLinkAlt />
      </button>
    </div>
  );
}
