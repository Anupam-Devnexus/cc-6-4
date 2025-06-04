import React, { useState } from "react";

export default function PortfolioCard({ image, project, location }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className="relative flex items-center justify-center max-h-72 h-72 w-full group overflow-hidden rounded-lg cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`
          absolute inset-0 bg-black/70 text-white flex-col items-center justify-around
          transition-all duration-500 ease-in-out
          ${isClicked ? "flex opacity-100 translate-y-0" : "hidden group-hover:flex group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4"}
        `}
      >
        <div className="w-3/4 border-b-2 border-white mb-2"></div>
        <span className="text-lg font-semibold">{project}</span>
        <span className="text-sm">Location: {location}</span>
        <div className="w-3/4 border-b-2 border-white mt-2"></div>
      </div>
    </div>
  );
}
