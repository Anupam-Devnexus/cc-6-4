import React from "react";
import Button from "../Buttons/Button1";
import { useNavigate } from "react-router-dom";

export default function InfrastructureCard({ image, infrastructure, path }) {
  const navigate = useNavigate();



  return (
    <article
      className="relative w-full h-80 rounded-lg shadow-md overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label={infrastructure}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-6">
        <h2 className="text-white text-2xl font-semibold mb-4">
          {infrastructure}
        </h2>
        <button className="bg-[var(--var-red-col)] px-4 py-1 text-white rounded-md cursor-pointer"
          onClick={() => navigate(path)}
        > Explore </button>
      </div>
    </article>
  );
}
